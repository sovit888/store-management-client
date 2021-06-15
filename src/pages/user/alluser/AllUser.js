import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import UserTable from "./UserTable";

const AllUser = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>All Users</BreadcrumbItem>
      </Breadcrumb>

      <Link to={"/user/new"} className="btn btn-primary custom-btn">
        Add User
      </Link>

      <UserTable />
    </>
  );
};

export default AllUser;
