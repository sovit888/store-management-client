import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import AttributeTable from "./AttributeTable";
import CreateAttribute from "./CreateAttribute";
import ManageAttribute from "./ManageAttribute";
import RemoveAttribute from "./RemoveAttribute";

const Attribute = () => {
  const [attribute, setAttribute] = useState({});
  const [createStatus, setCreateStatus] = useState(false);
  const handleCreate = () => setCreateStatus(!createStatus);

  const [updateStatus, setUpdateStatus] = useState(false);
  const handleUpdate = () => setUpdateStatus(!updateStatus);

  const [removeStatus, setRemoveStatus] = useState(false);
  const handleRemove = () => setRemoveStatus(!removeStatus);
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          Manage <small className="text-secondary">Attributes</small>
        </BreadcrumbItem>
      </Breadcrumb>
      <Button
        className="custom-btn custom-btn-primary"
        color="primary"
        onClick={handleCreate}
      >
        Add Attributes
      </Button>
      <AttributeTable
        setAttribute={setAttribute}
        handleUpdate={handleUpdate}
        handleRemove={handleRemove}
      />
      <CreateAttribute status={createStatus} toggle={handleCreate} />
      <ManageAttribute
        status={updateStatus}
        toggle={handleUpdate}
        attribute={attribute}
      />
      <RemoveAttribute
        status={removeStatus}
        toggle={handleRemove}
        attribute={attribute}
      />
    </>
  );
};

export default Attribute;
