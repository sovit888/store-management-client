import React from "react";
import { FaChartLine } from "react-icons/fa";

const Sale = ({ value }) => {
  return (
    <>
      <div className="content">
        <div className="left">
          <p className="label mb-1">{value}</p>
          <p> Total Sales</p>
        </div>
        <div className="right">
          <FaChartLine />
        </div>
      </div>
    </>
  );
};

export default Sale;
