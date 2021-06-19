import React from "react";
import { FaChartLine } from "react-icons/fa";

const Sale = () => {
  return (
    <>
      <div className="content">
        <div className="left">
          <p className="label mb-1">100</p>
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
