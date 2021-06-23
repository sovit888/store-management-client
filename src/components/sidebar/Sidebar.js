import React, { useEffect } from "react";
import NavLists from "./SidebarContent";
import NavItem from "./Sidebarcomponent";
import { IconContext } from "react-icons";
import { connect } from "react-redux";
import { getProfile } from "../../store/action";

import "./sidebar.css";

const Sidebar = ({ collapse, loadProfile, profile }) => {
  useEffect(() => {
    loadProfile();
  }, [loadProfile]);
  return (
    <div className={`sidebar ${collapse && "shrink"}`}>
      <div className="sidebar-header"></div>
      <ul className="sidebar-nav">
        <IconContext.Provider value={{ size: "20px" }}>
          {NavLists.map((navlist, index) => {
            return (
              <NavItem
                navlist={navlist}
                key={index}
                profile={profile}
                permission={navlist.permissions}
                permission_type={navlist.permission_type}
              />
            );
          })}
        </IconContext.Provider>
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { profile: state.profile };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadProfile: () => dispatch(getProfile()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
