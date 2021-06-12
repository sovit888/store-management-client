import React from "react";
import NavLists from "./SidebarContent";
import NavItem from "./Sidebarcomponent";
import { IconContext } from "react-icons";

import "./sidebar.css";

const Sidebar = ({ collapse }) => {
  return (
    <div className={`sidebar ${collapse && "shrink"}`}>
      <div className="sidebar-header"></div>
      <ul className="sidebar-nav">
        <IconContext.Provider value={{ size: "20px" }}>
          {NavLists.map((navlist, index) => {
            return <NavItem navlist={navlist} key={index} />;
          })}
        </IconContext.Provider>
      </ul>
    </div>
  );
};

export default Sidebar;
