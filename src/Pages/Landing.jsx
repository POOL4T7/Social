import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import { Users } from "../data";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";

const Landing = () => {
  let id = -1;
  const [notFriend, setNotFriend] = useState([]);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    let users = Users.filter((user) => {
      return user.id !== id;
    });
    setNotFriend(users);
  }, [id]);

  return (
    <>
      {userInfo?.userId ? (
        <>
          <div className="container  mt-5">
            <h3 className="text-center mb-5">
              Hello{" "}
              <span style={{ color: "red" }}>
                {userInfo.profileDetails.name.split(" ")[0]}
              </span>{" "}
              Add More Friends
            </h3>
            <div className="row">
              {notFriend.map((user) => (
                <div
                  key={user.id}
                  className="col-xs-6 col-sm-6 col-md-4 col-lg-3"
                >
                  <Card user={user} />
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </>
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
