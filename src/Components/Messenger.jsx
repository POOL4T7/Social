import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import MessageHeader from "./MessageHeader";
import axios from "../Utils/axios";
import { getCookie } from "../Utils/helper";
import { useSelector } from "react-redux";

const Messenger = ({ currentUser }) => {
  let scrollRef = useRef();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    const fetchMessage = async () => {
      const token = getCookie("token");
      const config = {
        headers: {
          "login-token": token,
        },
      };
      const res = await axios.get(`/message/${currentUser.userId}`, config);
      setMessages(res.data.data);
    };
    fetchMessage();
  }, [currentUser.userId]);

  const submitHandler = async (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      e.preventDefault();
      try {
        if (!newMessage) {
          alert("Add some text");
          return;
        }
        const msg = {
          text: newMessage,
        };
        const token = getCookie("token");
        const config = {
          headers: {
            "login-token": token,
          },
        };
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
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <MessageHeader user={currentUser} />
      <div className="chat-history">
        <ul className="m-b-0">
          {messages.length > 0 ? (
            messages?.map((msg) => (
              <div ref={scrollRef} key={msg._id}>
                <Message
                  message={msg.text}
                  time={msg.createdAt}
                  own={userInfo.userId === msg.senderId}
                />
              </div>
            ))
          ) : (
            <h4 className="text-center">
              Say Hello to {currentUser.profileDetails.username}
            </h4>
          )}
        </ul>
      </div>
      <form className="chat-message clearfix">
        <div className="input-group mb-0">
          <input
            type="text"
            className="form-control"
            placeholder="Enter text here..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={submitHandler}
          />
          <div className="input-group-prepend" onClick={submitHandler}>
            <span className="input-group-text">
              <i className="fa fa-send"></i>
            </span>
          </div>
        </div>
      </form>
    </>
  );
};

export default Messenger;
