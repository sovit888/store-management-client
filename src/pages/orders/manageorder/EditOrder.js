import React, { useState } from "react";
import { FormGroup, Label, Input, Modal, ModalBody, Button } from "reactstrap";
import { connect } from "react-redux";
import { updateOrder } from "../../../store/action";

const EditOrder = ({ updateStatus, toggle, order, editOrder }) => {
  const [status, setStatus] = useState(order.status);
  const handleSubmit = (e) => {
    editOrder({ data: { status }, id: order._id });
    toggle();
    setStatus(order.status);
  };
  return (
    <>
      <Modal isOpen={updateStatus}>
        <ModalBody>
          <p>Change Status</p>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                checked={status}
                onChange={(e) => setStatus(e.target.checked)}
              />{" "}
              Paid Status
            </Label>
          </FormGroup>
          <div className="w-75 mx-auto d-flex justify-content-between">
            <Button
              color="primary"
              className="custom-btn"
              onClick={handleSubmit}
            >
              Update
            </Button>
            <Button color="danger" className="custom-btn" onClick={toggle}>
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
    editOrder: (payload) => dispatch(updateOrder(payload)),
  };
};
export default connect(null, mapDispatchToProps)(EditOrder);
