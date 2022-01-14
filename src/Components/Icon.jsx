import React from "react";

const Icon = ({ value, set, type1, type2 }) => {
  return (
    <div className="btn btn-outline-success btn-sm" onClick={() => set(!value)}>
      <i
        className={value ? `fa fa-${type1}` : `fa fa-${type2}`}
        aria-hidden="true"
      ></i>
    </div>
  );
};

export default Icon;
