import React from "react";
import { Modal, ModalBody, Button } from "reactstrap";
import { connect } from "react-redux";
import { deleteOrder } from "../../../store/action";

const DeleteOrder = ({ status, order, toggle, removeOrder }) => {
  const handleDelete = (e) => {
    removeOrder(order._id);
    toggle();
  };
  return (
    <>
      {" "}
      <Modal isOpen={status}>
        <ModalBody>
          <p>Are you sure you want to delete order permanently?</p>
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
const mapDispatchToProps = (dispatch) => {
  return {
    removeOrder: (payload) => dispatch(deleteOrder(payload)),
  };
};

export default connect(null, mapDispatchToProps)(DeleteOrder);
