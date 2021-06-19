import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import OrderTable from "./OrderTable";

const ManageOrder = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>Manage Orders</BreadcrumbItem>
      </Breadcrumb>
      <OrderTable />
    </>
  );
};

export default ManageOrder;
