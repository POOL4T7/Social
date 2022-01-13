import React from "react";

const MessageHeader = ({ user }) => {
  return (
    <div className="chat-header clearfix">
      <div className="row">
        <div className="col-lg-6">
          <img src={user.profile} alt="avatar" />
          <div className="chat-about">
            <h6 className="m-b-0">{user.name}</h6>
            <small>Last seen: 10 min ago</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageHeader;
