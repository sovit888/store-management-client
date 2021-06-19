import React from "react";
import { FaDollarSign } from "react-icons/fa";

const Income = () => {
  return (
    <>
      <div className="content">
        <div className="left">
          <p className="label mb-1">100</p>
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
