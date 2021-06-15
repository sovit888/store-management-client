import React from "react";
import { Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import AttributeTable from "./AttributeTable";

const Attribute = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          Manage <small className="text-secondary">Attributes</small>
        </BreadcrumbItem>
      </Breadcrumb>
      <Button className="custom-btn custom-btn-primary" color="primary">
        Add Attributes
      </Button>
      <AttributeTable />
    </>
  );
};

export default Attribute;
