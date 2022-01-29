import React from "react";

const Online = ({ user }) => {
  return (
    <li className="clearfix">
      <img
        src={
          user.profileDetails.profile
            ? user.profileDetails.profile
            : user.profileDetails.gender === "Male"
            ? "/assests/images/boy.jpg"
            : "/assests/images/girl.jpg"
        }
        alt="avatar"
      />
      <div className="about">
        <div className="name">{user.profileDetails.username}</div>
        <div className="status">
          <i className="fa fa-circle offline"></i> left 7 mins ago{" "}
        </div>
      </div>
    </li>
  );
};

export default Online;
