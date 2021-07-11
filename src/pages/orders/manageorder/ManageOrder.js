import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import OrderTable from "./OrderTable";
import EditOrder from "./EditOrder";
import DeleteOrder from "./DeleteOrder";

const ManageOrder = () => {
  const [order, setOrder] = useState({});
  const [updateStatus, setUpdateStatus] = useState(false);
  const handleUpdate = () => setUpdateStatus(!updateStatus);

  const [removeStatus, setRemoveStatus] = useState(false);
  const handleRemove = () => setRemoveStatus(!removeStatus);

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>Manage Orders</BreadcrumbItem>
      </Breadcrumb>
      <OrderTable
        handleRemove={handleRemove}
        handleUpdate={handleUpdate}
        setOrder={setOrder}
      />
      <EditOrder
        updateStatus={updateStatus}
        toggle={handleUpdate}
        order={order}
      />
      <DeleteOrder status={removeStatus} toggle={handleRemove} order={order} />
    </>
  );
};

export default ManageOrder;
