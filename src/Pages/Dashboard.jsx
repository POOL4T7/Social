import React, { useState } from "react";
import Online from "../Components/Online";
import { Users, messages } from "../data";
import Message from "../Components/Message";
import MessageHeader from "../Components/MessageHeader";

const Dashboard = () => {
  const [currentChat, setCurrentChat] = useState(null);
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
                  />
                </div>
                <ul className="list-unstyled chat-list mt-2 mb-0">
                  {Users.map((user) => (
                    <div key={user.id} onClick={() => setCurrentChat(user)}>
                      <Online user={user} />
                    </div>
                  ))}
                </ul>
              </div>
              <div className="chat">
                {currentChat ? (
                  <>
                    <MessageHeader user={currentChat} />
                    <div className="chat-history">
                      <ul className="m-b-0">
                        {messages.map((msg) => (
                          <Message
                            key={msg.id}
                            message={msg.message}
                            time={msg.time}
                            own={msg.own}
                          />
                        ))}
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
                  <h1>Start a conversation</h1>
                )}
                {/* for end here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
