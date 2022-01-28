import React, { useState } from "react";
import Icon from "./Icon";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { followUser, unFollowUser } from "../actions/UserAction";

const Card = ({ user }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(false);
  const [followed, setFollowed] = useState(
    user?.followers.includes(userInfo?.userId)
  );
  let dispatch = useDispatch();

  const followHandler = async (e) => {
    e.preventDefault();
    console.log("followed", followed);
    try {
      await dispatch(followUser(user.userId));
    } catch (e) {
      console.log(e.message);
    }
  };

  const unFollowHandler = async (e) => {
    e.preventDefault();
    try {
      await unFollowUser(user.userId);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <>
      <div className="card">
        <img
          src={user.profileDetails.profile}
          className="card-img-top rounded"
          alt="profile"
          width="100%"
          height="200px"
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
        <div className="card-body ">
          <h5 className="card-title ">
            {user.profileDetails.name.split(" ")[0]}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            @{user.profileDetails.username}
          </h6>
          <div className="d-flex justify-content-around">
            <div data-bs-toggle="modal" data-bs-target={`#id${user._id}`}>
              <Icon set={setShow} value={show} type1="eye" type2="eye-slash" />
            </div>
            <Icon set={setLike} value={like} type1="heart" type2="heart-o" />
            <div onClick={followed ? unFollowHandler : followHandler}>
              <Icon
                set={setFollowed}
                value={followed}
                type1="minus"
                type2="plus"
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        _id={user._id}
        user={user.profileDetails}
        set={setShow}
        setFollow={setFollowed}
        follow={followed}
      />
    </>
  );
};

export default Card;
