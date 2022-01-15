import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import { Users } from "../data";

const Landing = () => {
  let isLoggedIn = true;
  let id = 0;
  const [notFriend, setNotFriend] = useState([]);
  useEffect(() => {
    let users = Users.filter((user) => {
      return user.id !== id;
    });
    setNotFriend(users);
  }, [id]);

  return (
    <>
      {isLoggedIn ? (
        <div className="container  mt-5">
          <h3 className="text-center mb-5">Add More Friends</h3>
          <div className="row">
            {notFriend.map((user) => (
              <div key={user.id} className="col-xs-4 col-sm-2  col-lg-2 ">
                <Card user={user} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container text-center p-5">
          <h1>Chat App</h1>
          <p>Welcome to the new era of Communication or chatting app</p>
          <Link className="btn btn-outline-success" to="/login">
            Get Started
          </Link>
        </div>
      )}
    </>
  );
};

export default Landing;
