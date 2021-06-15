import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import UserTable from "./UserTable";

const ManageUser = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>Manage User</BreadcrumbItem>
      </Breadcrumb>
      <UserTable />
    </>
  );
};

export default ManageUser;
