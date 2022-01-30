import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import { useSelector, useDispatch } from "react-redux";
import { getUsersFriendList } from "../actions/UserAction";
import Spinner from "../Components/Spinner";

const Friends = () => {
  let dispatch = useDispatch();
  const [friends, setFriends] = useState(null);
  const [Users, setUsers] = useState([]);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userFriends = useSelector((state) => state.userFriends);
  const { friendsList, loading, error, success } = userFriends;

  useEffect(() => {
    if (userInfo?.userId) {
      if (!friendsList && !loading) {
        dispatch(getUsersFriendList());
      } else {
        setUsers(friendsList);
      }
    }
  }, [friendsList, dispatch, loading, success, userInfo?.userId, error]);

  useEffect(() => {
    let users = Users?.filter((user) => {
      return user._id !== userInfo?._id;
    });
    setFriends(users);
  }, [Users, userInfo?._id]);
  return (
    <>
      {loading && <Spinner />}
      <div id="friends" className="container text-center mt-5">
        <h2 className="p-5">
          {friends?.length > 0 ? `Your Friends` : `You have no friends`}
        </h2>
        <div className="row">
          {friends?.length > 0 &&
            friends?.map((user) => (
              <div
                key={user._id}
                className="col-xs-6 col-sm-6 col-md-4 col-lg-3"
              >
                <Card user={user} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Friends;
