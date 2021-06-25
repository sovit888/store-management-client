import React from "react";
import { FaUsers } from "react-icons/fa";

const Group = ({ value }) => {
  return (
    <>
      <div className="content">
        <div className="left">
          <p className="label mb-1">{value}</p>
          <p> Total Groups</p>
        </div>
        <div className="right">
          <FaUsers />
        </div>
      </div>
    </>
  );
};

export default Group;
