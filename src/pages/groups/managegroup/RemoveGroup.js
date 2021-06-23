import React from "react";
import { Modal, ModalBody, Button } from "reactstrap";
import { connect } from "react-redux";
import { deleteGroup } from "../../../store/action";
const RemoveGroup = ({ status, toggle, group, removeGroup }) => {
  const handleDelete = (e) => {
    removeGroup(group._id);
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

const mapDispatchToProps = (dispatch) => {
  return {
    removeGroup: (payload) => dispatch(deleteGroup(payload)),
  };
};

export default connect(null, mapDispatchToProps)(RemoveGroup);
