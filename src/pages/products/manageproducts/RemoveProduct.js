import React from "react";
import { Modal, ModalBody, Button } from "reactstrap";
import { connect } from "react-redux";
import { deleteProduct } from "../../../store/action";

const RemoveProduct = ({ toggle, status, product, removeProduct }) => {
  const handleDelete = () => {
    removeProduct(product._id);
    toggle();
  };
  return (
    <>
      <Modal isOpen={status}>
        <ModalBody>
          <p>Are you sure you want to delete product permanently?</p>
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
    removeProduct: (payload) => dispatch(deleteProduct(payload)),
  };
};
export default connect(null, mapDispatchToProps)(RemoveProduct);
