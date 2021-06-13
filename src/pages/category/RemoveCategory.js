import React from "react";
import { Button, Modal, ModalBody } from "reactstrap";

const RemoveCategory = ({ status, toggle, category }) => {
  return (
    <>
      <Modal isOpen={status}>
        <ModalBody>
          <p className="text-center">Are you sure You want to delete?</p>
          <div className="mx-auto sm-w-75 w-50  d-flex justify-content-between">
            <Button className=" custom-btn btn-danger ">Confirm</Button>
            <Button className="custom-btn custom-btn-primary" onClick={toggle}>
              Cancel
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default RemoveCategory;
