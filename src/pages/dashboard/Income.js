import React from "react";
import { FaDollarSign } from "react-icons/fa";

const Income = ({ value }) => {
  return (
    <>
      <div className="content">
        <div className="left">
          <p className="label mb-1">{value}</p>
          <p> Total Income</p>
        </div>
        <div className="right">
          <FaDollarSign />
        </div>
      </div>
    </>
  );
};

export default Income;
