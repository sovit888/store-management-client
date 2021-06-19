import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import CreateValue from "./CreateValue";
import ManageValue from "./ManageValue";
import RemoveValue from "./RemoveValue";
import ValueTable from "./ValueTable";

const AttributeValue = () => {
  const { id } = useParams();
  useEffect(() => {}, [id]);
  const [datas, setValue] = useState({});

  const [createStatus, setCreateStatus] = useState(false);
  const handleCreate = () => setCreateStatus(!createStatus);

  const [removeStatus, setRemoveStatus] = useState(false);
  const handleRemove = () => setRemoveStatus(!removeStatus);

  const [updateStatus, setUpdateStatus] = useState(false);
  const handleUpdate = () => setUpdateStatus(!updateStatus);

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>Manage Values</BreadcrumbItem>
      </Breadcrumb>
      <Button
        className="custom-btn custom-btn-primary my-0 mb-2"
        onClick={handleCreate}
      >
        Add Values
      </Button>
      <ValueTable
        handleRemove={handleRemove}
        setValue={setValue}
        handleUpdate={handleUpdate}
      />
      <CreateValue status={createStatus} toggle={handleCreate} />
      <RemoveValue status={removeStatus} toggle={handleRemove} value={datas} />
      <ManageValue status={updateStatus} toggle={handleUpdate} value={datas} />
    </>
  );
};

export default AttributeValue;
