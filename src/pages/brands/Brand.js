import React from "react";
import { Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import CreateBrand from "./CreateBrand";
import ManageBrand from "./ManageBrand";
import "./brand.css";
import BrandTable from "./BrandTable";

const Brand = () => {
  const [brand, setBrand] = React.useState({});
  const [createBrand, setCreateBrand] = React.useState(false);
  const handleCreateStatus = (e) => setCreateBrand(!createBrand);

  const [manageBrand, setManageBrand] = React.useState(false);
  const handleManageStatus = (e) => setManageBrand(!manageBrand);

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
        toggle={handleManageStatus}
        brand={brand}
      />
      <ManageBrand
        toggle={handleManageStatus}
        status={manageBrand}
        brand={brand}
      />
    </>
  );
};

export default Brand;
