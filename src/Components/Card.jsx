import React, { useState } from "react";
import Icon from "./Icon";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  followUser,
  unFollowUser,
  likeUser,
  disLikeUser,
} from "../actions/UserAction";

const Card = ({ user }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(user?.likes.includes(userInfo?.userId));
  const [followed, setFollowed] = useState(
    user?.followers.includes(userInfo?.userId)
  );
  let dispatch = useDispatch();

  const followHandler = async (e) => {
    e.preventDefault();
    console.log("followed", followed);
    try {
      if (followed) {
        await dispatch(unFollowUser(user.userId));
      } else {
        await dispatch(followUser(user.userId));
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const likeHandler = async (e) => {
    e.preventDefault();
    try {
      if (like) {
        await dispatch(disLikeUser(user.userId));
      } else {
        await dispatch(likeUser(user.userId));
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <div className="card">
        <img
          src={
            user.profileDetails.profile
              ? user.profileDetails.profile
              : user.profileDetails.gender === "Male"
              ? "/assests/images/boy.jpg"
              : "/assests/images/girl.jpg"
          }
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
            <div onClick={likeHandler}>
              <Icon set={setLike} value={like} type1="heart" type2="heart-o" />
            </div>
            <div onClick={followHandler}>
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
        followHandler={followHandler}
      />
    </>
  );
};

export default Card;
