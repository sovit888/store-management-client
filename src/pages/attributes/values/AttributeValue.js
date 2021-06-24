import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import CreateValue from "./CreateValue";
import ManageValue from "./ManageValue";
import RemoveValue from "./RemoveValue";
import ValueTable from "./ValueTable";
import authAxios from "../../../utils/authAxios";
import { useHistory } from "react-router-dom";

const AttributeValue = () => {
  const [attributeValues, setAttributeValues] = useState([]);
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    authAxios
      .get(`/${id}/values`)
      .then((result) => {
        setAttributeValues(result.data.attributeValues);
      })
      .catch((error) => {
        history.push("/attribute");
      });
  }, [history, id]);

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
        attributeValues={attributeValues}
      />
      <CreateValue
        status={createStatus}
        toggle={handleCreate}
        setAttributeValues={setAttributeValues}
        attributeValues={attributeValues}
        id={id}
      />
      <RemoveValue
        status={removeStatus}
        toggle={handleRemove}
        value={datas}
        setAttributeValues={setAttributeValues}
        attributes={attributeValues}
        id={id}
      />
      <ManageValue
        status={updateStatus}
        toggle={handleUpdate}
        value={datas}
        setAttributeValues={setAttributeValues}
        attributes={attributeValues}
        id={id}
      />
    </>
  );
};

export default AttributeValue;
