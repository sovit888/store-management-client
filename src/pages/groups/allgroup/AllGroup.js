import React from "react";
import { BreadcrumbItem, Breadcrumb } from "reactstrap";
import { Link } from "react-router-dom";
import GroupTable from "./GroupTable";

const AllGroup = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>Group</BreadcrumbItem>
      </Breadcrumb>
      <Link to={"/group/new"} className="custom-btn btn btn-primary">
        Add New Group
      </Link>
      <GroupTable />
    </>
  );
};

export default AllGroup;
