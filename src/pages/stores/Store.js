import React from "react";
import { Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import CreateStore from "./CreateStore";
import ManageStore from "./ManageStore";
import RemoveStore from "./RemoveStore";
import "./store.css";
import StoreTable from "./StoreTable";

const Store = () => {
  const [store, setStore] = React.useState({});
  const [createShop, setCreateShop] = React.useState(false);
  const handleCreateStatus = (e) => setCreateShop(!createShop);

  const [manageShop, setManageShop] = React.useState(false);
  const handleManageStatus = (e) => setManageShop(!manageShop);

  const [removeStatus, setRemoveStatus] = React.useState(false);
  const handleRemoveStatus = () => setRemoveStatus(!removeStatus);

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          Manage <small className="text-secondary">Store</small>
        </BreadcrumbItem>
      </Breadcrumb>
      <Button
        className="custom-btn custom-btn-primary"
        color="primary"
        onClick={handleCreateStatus}
      >
        Add Store
      </Button>
      <CreateStore toggle={handleCreateStatus} status={createShop} />
      <StoreTable
        setStore={setStore}
        handleManage={handleManageStatus}
        handleRemove={handleRemoveStatus}
      />
      <ManageStore
        toggle={handleManageStatus}
        status={manageShop}
        store={store}
      />
      <RemoveStore
        status={removeStatus}
        toggle={handleRemoveStatus}
        store={store}
      />
    </>
  );
};

export default Store;
