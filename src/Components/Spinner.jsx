import React from "react";

const Spinner = () => {
  return (
    <div className="container text-center">
      <div
        class="spinner-border"
        role="status"
        style={{ width: "100px", height: "100px" }}
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
