import React, { useRef, useEffect, useState } from "react";
import { BsCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { connect } from "react-redux";
import { IconContext } from "react-icons";

const NavItem = ({ navlist, profile, permission, permission_type }) => {
  const [group, setGroup] = useState({});
  useEffect(() => {
    if (profile.info && profile.info.group) {
      setGroup(profile.info.group);
    }
  }, [profile]);
  return (
    <>
      {permission ? (
        group && group[permission_type] && <ShowMenus navlist={navlist} />
      ) : (
        <ShowMenus navlist={navlist} />
      )}
    </>
  );
};

const ShowMenus = ({ navlist }) => {
  return (
    <IconContext.Provider value={{ size: "20px" }}>
      {navlist.children ? (
        <DropDown navlist={navlist} />
      ) : (
        <li>
          <Link to={navlist.link}>
            {navlist.icons}
            <span>{navlist.label}</span>
          </Link>
        </li>
      )}
    </IconContext.Provider>
  );
};

const DropDown = ({ navlist }) => {
  const dropdownRef = useRef();
  const toggleRef = useRef();
  const handleToggle = (e) => {
    e.preventDefault();
    dropdownRef.current.classList.toggle("active");
    toggleRef.current.classList.toggle("active");
  };
  return (
    <li>
      <Link to={"/#"} ref={toggleRef} onClick={handleToggle}>
        {navlist.icons}

        <span>
          {navlist.label}
          <FaChevronRight className="rotate" />
        </span>
      </Link>
      <ul className="submenu" ref={dropdownRef}>
        {navlist.children.map((value, index) => {
          return (
            <li key={index}>
              <Link to={value.link}>
                <BsCircle />
                <span>{value.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
};
const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  };
};
export default connect(mapStateToProps, null)(NavItem);
