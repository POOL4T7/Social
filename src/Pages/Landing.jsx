import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { getUsersList } from "../actions/UserAction";

const Landing = () => {
  let dispatch = useDispatch();
  const [excludeMe, setExcludeMe] = useState([]);
  const [Users, setUsers] = useState([]);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const usersList = useSelector((state) => state.usersList);
  const { List, loading, error, success } = usersList;

  useEffect(() => {
    if (!loading && !success) {
      dispatch(getUsersList());
    } else {
      setUsers(List);
    }
  }, [List, dispatch, loading, success]);

  useEffect(() => {
    let users = Users?.filter((user) => {
      return user._id !== userInfo?._id;
    });
    setExcludeMe(users);
  }, [Users, userInfo?._id]);

  return (
    <>
      {userInfo?.userId ? (
        <>
          <div className="container  mt-5">
            {error ? (
              <h1>{error}</h1>
            ) : (
              <>
                <h3 className="text-center mb-5">
                  Hello{" "}
                  <span style={{ color: "red" }}>
                    {userInfo.profileDetails.name.split(" ")[0]}
                  </span>{" "}
                  Add More Friends
                </h3>
                <div className="row">
                  {excludeMe?.map((user) => (
                    <div
                      key={user._id}
                      className="col-xs-6 col-sm-6 col-md-4 col-lg-3"
                    >
                      <Card user={user} />
                    </div>
                  ))}
                </div>
              </>
            )}
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
