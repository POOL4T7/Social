import { useEffect, useState } from "react";
// import { io } from "socket.io-client";
import Online from "../Components/Online";
import { messages } from "../data";
import Message from "../Components/Message";
import MessageHeader from "../Components/MessageHeader";
import { useSelector, useDispatch } from "react-redux";
import { getUsersFriendList } from "../actions/UserAction";
import { useNavigate } from "react-router-dom";
import Spinner from "../Components/Spinner";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [currentChat, setCurrentChat] = useState(null);
  const [findFriend, setFindFriend] = useState([]);
  const [friends, setFriends] = useState([]);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userFriends = useSelector((state) => state.userFriends);
  const { friendsList, loading, error } = userFriends;

  // const socket = io("ws://localhost:8080");
  // useEffect(() => {
  //   socket.on("connect", () => {
  //     socket.emit("addUser", { userId: "123456789", socketId: socket.id });
  //   });

  //   socket.on("disconnect", () => {
  //     console.log(socket.id); // undefined
  //   });
  // }, [socket]);

  useEffect(() => {
    if (!userInfo?.userId) {
      navigator("/login");
    } else {
      if (!friendsList) {
        dispatch(getUsersFriendList());
      } else {
        setFriends(friendsList);
        setFindFriend(friendsList);
      }
    }
  }, [dispatch, friendsList, navigator, userInfo]);

  const searchedFriend = (e) => {
    e.preventDefault();
    let friendarray = friends.filter((friend) => {
      if (e.target.value === "") {
        return friend;
      }
      return (
        friend.profileDetails.name
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) ||
        friend.profileDetails.username
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
    });
    setFindFriend(friendarray);
  };

  return (
    <div id="dashboard">
      <div className="container">
        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="card chat-app">
              <div id="plist" className="people-list">
                <div className="input-group">
                  <div className="input-group-prepend"></div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    onChange={(e) => searchedFriend(e)}
                  />
                </div>
                <ul className="list-unstyled chat-list mt-2 mb-0 people-list-start">
                  {loading ? (
                    <Spinner />
                  ) : error ? (
                    <h1>{error}</h1>
                  ) : (
                    findFriend?.map((user) => (
                      <div key={user._id} onClick={() => setCurrentChat(user)}>
                        <Online user={user} />
                      </div>
                    ))
                  )}
                </ul>
              </div>
              <div className="chat">
                {currentChat ? (
                  <>
                    <MessageHeader user={currentChat} />
                    <div className="chat-history">
                      <ul className="m-b-0">
                        {messages.length > 0 ? (
                          messages?.map((msg) => (
                            <Message
                              key={msg.id}
                              message={msg.message}
                              time={msg.time}
                              own={msg.own}
                            />
                          ))
                        ) : (
                          <h4 className="text-center">
                            Say Hello to {currentChat.profileDetails.name}
                          </h4>
                        )}
                      </ul>
                    </div>
                    <div className="chat-message clearfix">
                      <div className="input-group mb-0">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fa fa-send"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter text here..."
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <h1 className="text-center">Start a conversation</h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
