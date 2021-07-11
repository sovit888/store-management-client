import React from "react";
import NavLists from "./SidebarContent";
import NavItem from "./Sidebarcomponent";
import "./sidebar.css";

const Sidebar = ({ collapse }) => {
  return (
    <div className={`sidebar ${collapse && "shrink"}`}>
      <div className="sidebar-header"></div>
      <ul className="sidebar-nav">
        {NavLists.map((navlist, index) => {
          return (
            <NavItem
              navlist={navlist}
              key={index}
              permission={navlist.permissions}
              permission_type={navlist.permission_type}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
