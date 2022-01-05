import React from "react";

const Online = ({ user }) => {
  return (
    <li className="clearfix">
      <img src={user.profile} alt="avatar" />
      <div className="about">
        <div className="name">{user.name}</div>
        <div className="status">
          <i className="fa fa-circle offline"></i> left 7 mins ago{" "}
        </div>
      </div>
    </li>
  );
};

export default Online;
