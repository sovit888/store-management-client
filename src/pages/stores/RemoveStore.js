import React from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { connect } from "react-redux";
import { deleteStore } from "../../store/action";

const RemoveStore = ({ status, toggle, store, removeStore }) => {
  const handleConfirm = (e) => {
    removeStore(store._id);
    toggle();
  };
  return (
    <>
      <Modal isOpen={status}>
        <ModalBody>
          <p className="text-center">Are you sure You want to delete?</p>
          <div className="mx-auto sm-w-75 w-50  d-flex justify-content-between">
            <Button
              className=" custom-btn  "
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
const mapDispatchToProps = (dispatch) => {
  return {
    removeStore: (payload) => dispatch(deleteStore(payload)),
  };
};
export default connect(null, mapDispatchToProps)(RemoveStore);
