import React from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import { deleteBrand } from "../../store/action";
import { connect } from "react-redux";

const RemoveBrand = ({ status, toggle, brand, removeBrand }) => {
  const handleConfirm = (e) => {
    removeBrand(brand._id);
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

const mapDispatchToProps = (dispatch) => {
  return {
    removeBrand: (payload) => dispatch(deleteBrand(payload)),
  };
};

export default connect(null, mapDispatchToProps)(RemoveBrand);
