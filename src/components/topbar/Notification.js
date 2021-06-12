import React from "react";
import { FaBell } from "react-icons/fa";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap";

const Notification = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} className="notification">
        <DropdownToggle>
          <FaBell />
          <Badge color="secondary">4</Badge>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem className="text-center">15 Notification</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Header</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem>Dropdown Item Text</DropdownItem>

          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem className="text-primary">
            See All Notifications
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default Notification;
