import React from "react";
import "./topbar.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Notification from "./Notification";

const Topbar = ({ handleToggle }) => {
  return (
    <>
      <div className="topbar">
        <div className="content">
          <div className="topbar-left">
            <FaBars onClick={handleToggle} />
            <Link to={"/#"}>Home</Link>
          </div>
          <div className="topbar-right">
            <Notification />
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
