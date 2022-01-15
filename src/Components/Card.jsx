import React, { useState } from "react";
import Icon from "./Icon";

const Card = ({ user }) => {
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(false);
  const [followed, setFollowed] = useState(false);

  return (
    <div className="card">
      <img src={user.profile} className="card-img-top rounded" alt="profile" />
      <div className="card-body ">
        <h5 className="card-title ">{user.name.split(" ")[0]}</h5>
        <h6 className="card-subtitle mb-2 text-muted">@username</h6>
        <div className="d-flex justify-content-around">
          <Icon set={setShow} value={show} type1="eye" type2="eye-slash" />
          <Icon set={setLike} value={like} type1="heart" type2="heart-o" />
          <Icon set={setFollowed} value={followed} type1="minus" type2="plus" />
          {/* <div
            className="btn btn-outline-success btn-sm"
            onClick={() => setShow(!show)}
          >
            <i
              className={show ? "fa fa-eye" : "fa fa-eye-slash"}
              aria-hidden="true"
            ></i>
          </div> */}
          {/* <div
            className="btn btn-outline-danger btn-sm"
            onClick={() => setLike(!like)}
          >
            <i
              className={like ? "fa fa-heart" : "fa fa-heart-o"}
              aria-hidden="true"
            ></i>
          </div> */}
          {/* <div
            className="btn btn-outline-primary btn-sm"
            onClick={(e) => setFollowed(!followed)}
          >
            <i
              className={followed ? "fa fa-minus" : "fa fa-plus"}
              aria-hidden="true"
            ></i>{" "}
            {followed ? " unfollow" : " Follow"}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
