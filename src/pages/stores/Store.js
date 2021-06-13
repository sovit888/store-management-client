import React from "react";
import { Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import CreateStore from "./CreateStore";
// import ManageStore from './ManageStore'
import "./store.css";
import StoreTable from "./StoreTable";

const Store = () => {
  // const [store,setStore]=React.useState({})
  const [createShop, setCreateShop] = React.useState(false);
  const handleCreateStatus = (e) => setCreateShop(!createShop);

  // const [manageShop, setManageShop] = React.useState(false);
  // const ManageStatus = (e) => setCreateShop(!manageShop);

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          Manage <small className="text-secondary">Store</small>
        </BreadcrumbItem>
      </Breadcrumb>
      <Button
        className="custom-btn custom-btn-primary"
        onClick={handleCreateStatus}
      >
        Add Store
      </Button>
      <CreateStore toggle={handleCreateStatus} status={createShop} />
      <StoreTable />
      {/* <ManageStore
        toggle={handleManageStatus}
        status={manageStatus}
        store={store}
      /> */}
    </>
  );
};

export default Store;
