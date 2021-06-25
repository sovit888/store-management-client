import React from "react";
import { FaUserAlt } from "react-icons/fa";

const User = ({ value }) => {
  return (
    <>
      <div className="content">
        <div className="left">
          <p className="label mb-1">{value}</p>
          <p> Total Users</p>
        </div>
        <div className="right">
          <FaUserAlt />
        </div>
      </div>
    </>
  );
};

export default User;
