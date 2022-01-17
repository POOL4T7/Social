import React, { useState } from "react";
import Icon from "./Icon";
import Modal from "./Modal";

const Card = ({ user }) => {
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(false);
  const [followed, setFollowed] = useState(false);

  return (
    <>
      <div className="card">
        <img
          src={user.profile}
          className="card-img-top rounded"
          alt="profile"
        />
        <div className="card-body ">
          <h5 className="card-title ">{user.name.split(" ")[0]}</h5>
          <h6 className="card-subtitle mb-2 text-muted">@username</h6>
          <div className="d-flex justify-content-around">
            <div
              data-bs-toggle="modal"
              data-bs-target={`#id${user.id}`}
            >
              <Icon set={setShow} value={show} type1="eye" type2="eye-slash" />
            </div>
            <Icon set={setLike} value={like} type1="heart" type2="heart-o" />
            <Icon
              set={setFollowed}
              value={followed}
              type1="minus"
              type2="plus"
            />
          </div>
        </div>
      </div>
      <Modal user={user} set={setShow} />
    </>
  );
};

export default Card;
