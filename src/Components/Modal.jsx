import React from "react";

const Modal = ({ user, set, setFollow, follow }) => {
  return (
    <div
      className="modal fade"
      id={`id${user.id}`}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title"
              id="exampleModalLabel"
              style={{ color: "red" }}
            >
              Profile Details
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => set(false)}
            ></button>
          </div>
          <div className="modal-body">
            <div className="">
              <div>
                <img
                  className="rounded"
                  src={user.profile}
                  alt="profile"
                  width="100%"
                />
              </div>
              <div className="text-center mt-3" tabIndex="-1">
                <div className="row">
                  <div className="col-4">Name</div>
                  <div className="col-8">{user.name} </div>
                </div>
                <div className="row">
                  <div className="col-4">Country</div>
                  <div className="col-8">{user.country}</div>
                </div>
                <div className="row">
                  <div className="col-4">Age</div>
                  <div className="col-8">{user.age}</div>
                </div>
                <div className="row">
                  <div className="col-4">Gender</div>
                  <div className="col-8">{user.gender}</div>
                </div>
                <hr />

                <h6>{user.bio}</h6>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => set(false)}
            >
              Close
            </button>
            <button
              className="btn btn-success"
              onClick={() => setFollow(!follow)}
            >
              {follow ? "Unfollow " : "Follow"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
