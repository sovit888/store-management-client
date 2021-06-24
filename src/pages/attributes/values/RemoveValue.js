import React from "react";
import { Modal, ModalBody, Button } from "reactstrap";
import authAxios from "../../../utils/authAxios";

const RemoveValue = ({
  status,
  toggle,
  value,
  id,
  setAttributeValues,
  attributes,
}) => {
  const handleConfirm = () => {
    authAxios.delete(`/${id}/values/${value._id}`).then((result) => {
      let newList = [...attributes];
      setAttributeValues(
        newList.filter((list) => list._id !== result.data.values._id)
      );
    });
    toggle();
  };
  return (
    <>
      <Modal isOpen={status}>
        <ModalBody>
          <p className="text-center">Are you sure You want to delete?</p>
          <div className="mx-auto sm-w-75 w-50  d-flex justify-content-between">
            <Button
              className=" custom-btn "
              color="danger"
              onClick={handleConfirm}
            >
              Confirm
            </Button>
            <Button className="custom-btn custom-btn-primary" onClick={toggle}>
              Cancel
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default RemoveValue;
