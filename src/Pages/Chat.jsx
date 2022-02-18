import React, { useState, useEffect, useRef } from "react";
import "../chat.css";
import io from "socket.io-client";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../Components/Sidebar";
import { getUsersFriendList } from "../actions/UserAction";
import Message from "../Components/Message";
import { getCookie } from "../Utils/helper";
import axios from "../Utils/axios";
import { useNavigate } from "react-router-dom";
import Spinner from "../Components/Spinner";

const Chat = () => {
  let scrollRef = useRef();
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const [arrivalMessage, setArrivalMessage] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [messageLoading, setMessageLoading] = useState(false);
  let socket = useRef();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userFriends = useSelector((state) => state.userFriends);
  const { friendsList, loading } = userFriends;
  useEffect(() => {
    socket.current = io("https://social1server.herokuapp.com");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    if (arrivalMessage) {
      setMessages((pre) => [...pre, arrivalMessage]);
    }
  }, [arrivalMessage, currentUser]);

  useEffect(() => {
    socket.current.emit("addUser", { userId: userInfo.userId });
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(
        userInfo.followings.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [userInfo.followings, userInfo.userId]);

  useEffect(() => {
    if (!userInfo?.userId) {
      navigator("/login");
    } else {
      if (!friendsList) {
        dispatch(getUsersFriendList());
      } else {
        setFriends(friendsList);
        // setFindFriend(friendsList);
      }
    }
  }, [dispatch, friendsList, navigate, userInfo]);

  useEffect(() => {
    if (!userInfo.userId) {
      navigate("/login");
    }
  }, [navigate, userInfo]);

  useEffect(() => {
    const fetchMessage = async () => {
      const token = getCookie("token");
      const config = {
        headers: {
          "login-token": token,
        },
      };
      setMessageLoading(true);
      const res = await axios.get(`/message/${currentUser.userId}`, config);
      setMessages(res.data.data);
      setMessageLoading(false);
    };
    if (currentUser.userId) {
      fetchMessage();
    }
  }, [currentUser.userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMessage) {
      alert("Add some text");
      return;
    }
    try {
      const msg = {
        text: newMessage,
      };
      const token = getCookie("token");
      const config = {
        headers: {
          "login-token": token,
        },
      };
      if (onlineUsers.includes(currentUser.userId)) {
        await socket.current.emit("sendMessage", {
          senderId: userInfo.userId,
          receiverId: currentUser.userId,
          text: newMessage,
        });
      }
      const { data } = await axios.post(
        `/message/${currentUser.userId}`,
        msg,
        config
      );
      setMessages([...messages, data.data]);
      setNewMessage("");
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="p-5 container" id="chat">
      <div className="row">
        <Sidebar
          friends={friends}
          onlineUsers={onlineUsers}
          setCurrentUser={setCurrentUser}
          loading={loading}
        />
        {currentUser?.userId && (
          <div className="col-9 " id="message-history">
            <div className="messengerHeader px-2 border-top">
              <img
                className="rounded-circle img-fluid m-1"
                src={
                  currentUser.profileDetails.profile
                    ? currentUser.profileDetails.profile
                    : currentUser.profileDetails.gender === "Male"
                    ? "/assests/images/boy.jpg"
                    : "/assests/images/girl.jpg"
                }
                alt="avatar"
                style={{
                  lineHeight: "3rem",
                  width: "3rem",
                  height: "3rem",
                  marginTop: "8px",
                }}
              />
              <div className="mt-2 px-2">
                <span>{currentUser.profileDetails.name}</span>
                {onlineUsers.includes(currentUser.userId) && (
                  <p style={{ fontSize: "13px" }}>
                    <i
                      className="fa fa-circle"
                      style={{ color: "green", fontSize: "8px" }}
                    ></i>{" "}
                    Online
                  </p>
                )}
              </div>
            </div>
            <div className="chat-history d-flex flex-column border ">
              {messageLoading ? (
                <Spinner />
              ) : messages.length > 0 ? (
                messages.map((m) => (
                  <div ref={scrollRef} key={m._id}>
                    <Message
                      message={m.text}
                      time={m.createdAt}
                      own={userInfo.userId === m.senderId}
                    />
                  </div>
                ))
              ) : (
                <h1 className="text-center">Start Converstion</h1>
              )}
            </div>
            <form className="chat-message">
              <div className="input-group mb-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter text here..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button
                  type="submit"
                  className="btn btn-outline-success btn-sm"
                  onClick={handleSubmit}
                >
                  <i className="fa fa-send"></i>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
