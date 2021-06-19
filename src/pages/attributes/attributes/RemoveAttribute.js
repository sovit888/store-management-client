import React from "react";
import { Modal, ModalBody, Button } from "reactstrap";

const RemoveAttribute = ({ status, toggle }) => {
  const handleConfirm = () => {
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

export default RemoveAttribute;
