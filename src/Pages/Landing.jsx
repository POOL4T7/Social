import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="container text-center p-5">
      <h1>Chat App</h1>
      <p>Welcome to the new era of Communication or chatting app</p>
      <Link className="btn btn-outline-success" to="/login">
        Get Started
      </Link>
    </div>
  );
};

export default Landing;
