import React from "react";

const MessageHeader = ({ user }) => {
  return (
    <>
      <div className="chat-header clearfix">
        <div className="row">
          <div className="col-lg-6">
            <img
              src={
                user.profileDetails.profile
                  ? user.profileDetails.profile
                  : user.profileDetails.gender === "Male"
                  ? "/assests/images/boy.jpg"
                  : "/assests/images/girl.jpg"
              }
              alt="avatar"
              style={{ objectFit: "fill" }}
            />
            <div className="chat-about">
              <h6 className="m-b-0">{user.profileDetails.name}</h6>
              <small>Last seen: {new Date().toISOString()}</small>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default MessageHeader;
