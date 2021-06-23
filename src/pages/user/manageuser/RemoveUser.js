import React from "react";
import { Modal, ModalBody, Button } from "reactstrap";
import { deleteUser } from "../../../store/action";
import { connect } from "react-redux";

const RemoveUser = ({ status, toggle, user, removeUser }) => {
  const handleDelete = (e) => {
    removeUser(user._id);
    toggle();
  };
  return (
    <>
      <Modal isOpen={status}>
        <ModalBody>
          <p>Are you sure you want to delete user permanently?</p>
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
    removeUser: (payload) => dispatch(deleteUser(payload)),
  };
};
export default connect(null, mapDispatchToProps)(RemoveUser);
