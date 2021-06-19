import React from "react";
import { Modal, ModalBody, Button } from "reactstrap";

const RemoveGroup = ({ status, toggle, group }) => {
  const handleDelete = (e) => {
    toggle();
  };
  return (
    <>
      <Modal isOpen={status}>
        <ModalBody>
          <p>Are you sure you want to delete group permanently?</p>
          <div className="mx-auto w-75 d-flex justify-content-between">
            <Button
              color="danger"
              className="custom-btn"
              onClick={handleDelete}
            >
              Confirm
            </Button>
            <Button color="primary" className="custom-btn" onClick={toggle}>
              Cancel
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default RemoveGroup;
