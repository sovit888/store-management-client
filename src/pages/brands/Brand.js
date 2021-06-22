import React from "react";
import { Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import CreateBrand from "./CreateBrand";
import ManageBrand from "./ManageBrand";
import "./brand.css";
import BrandTable from "./BrandTable";
import RemoveBrand from "./RemoveBrand";

const Brand = () => {
  const [brand, setBrand] = React.useState({});
  const [createBrand, setCreateBrand] = React.useState(false);
  const handleCreateStatus = (e) => setCreateBrand(!createBrand);

  const [manageBrand, setManageBrand] = React.useState(false);
  const handleManageStatus = (e) => setManageBrand(!manageBrand);

  const [removeStatus, setRemoveStatus] = React.useState(false);
  const handleRemoveStatus = () => setRemoveStatus(!removeStatus);

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          Manage <small className="text-secondary">Brands</small>
        </BreadcrumbItem>
      </Breadcrumb>
      <Button
        className="custom-btn custom-btn-primary"
        onClick={handleCreateStatus}
      >
        Add Brands
      </Button>
      <CreateBrand toggle={handleCreateStatus} status={createBrand} />
      <BrandTable
        setBrand={setBrand}
        handleManage={handleManageStatus}
        handleRemove={handleRemoveStatus}
        brand={brand}
      />
      <ManageBrand
        toggle={handleManageStatus}
        status={manageBrand}
        brand={brand}
      />
      <RemoveBrand
        status={removeStatus}
        toggle={handleRemoveStatus}
        brand={brand}
      />
    </>
  );
};

export default Brand;
