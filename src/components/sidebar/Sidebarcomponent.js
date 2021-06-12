import React, { useRef } from "react";
import { BsCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const NavItem = ({ navlist }) => {
  return navlist.children ? (
    <DropDown navlist={navlist} />
  ) : (
    <li>
      <Link to={"/#"}>
        {navlist.icons}
        <span>{navlist.label}</span>
      </Link>
    </li>
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
              <Link to="/#">
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

export default NavItem;
