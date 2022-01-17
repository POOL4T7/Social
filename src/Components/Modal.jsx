import React from "react";

const Modal = ({ user, set }) => {
  return (
    <div
      class="modal fade"
      id={`id${user.id}`}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title"
              id="exampleModalLabel"
              style={{ color: "red" }}
            >
              Profile Details
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => set(false)}
            ></button>
          </div>
          <div class="modal-body">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <img
                  className="rounded"
                  src={user.profile}
                  alt="profile"
                  width="100%"
                />
              </div>
              <div className="col-sm-12 col-md-8 text-center">
                <div className="row">
                  <div className="col-4">Name</div>
                  <div className="col-8">{user.name} </div>
                </div>
                <div className="row">
                  <div className="col-4">Country</div>
                  <div className="col-8">India</div>
                </div>
                <div className="row">
                  <div className="col-4">Age</div>
                  <div className="col-8">18+</div>
                </div>
                <div className="row">
                  <div className="col-4">Gender</div>
                  <div className="col-8">Male</div>
                </div>
              <hr />

              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, doloremque. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Necessitatibus similique temporibus quam
                aliquid, est deserunt quibusdam quas nam corrupti nesciunt quae,
                modi labore ad non ea provident laboriosam voluptate in!
                Distinctio et optio, eos autem exercitationem illum dolor
                aliquam provident voluptatum odio laborum assumenda eius,
                debitis ea, vel ipsum a architecto hic omnis voluptates. Nam sed
                perspiciatis maiores ea a?
              </h6>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => set(false)}
            >
              Close
            </button>
            <button class="btn btn-success">Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
