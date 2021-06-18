import React from "react";
import { Modal, ModalBody, FormGroup, Label, Input, Button } from "reactstrap";

const UpdateUser = ({ status, toggle, user }) => {
  const [group, setGroup] = React.useState("User");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(group);
    toggle();
  };
  return (
    <>
      <Modal isOpen={status}>
        <ModalBody>
          <p>Change Groups</p>

          <FormGroup>
            <Label for="usergroup">Groups:</Label>
            <Input
              type="select"
              name="group"
              id="usergroup"
              onChange={(e) => setGroup(e.target.value)}
            >
              <option>User</option>
              <option>Staff</option>
              <option>Lawyer</option>
            </Input>
          </FormGroup>
          <div className="w-75 mx-auto d-flex justify-content-between">
            <Button
              color="primary"
              className="custom-btn"
              onClick={handleSubmit}
            >
              Update
            </Button>
            <Button
              color="danger"
              type="submit"
              className="custom-btn"
              onClick={() => toggle()}
            >
              Cancel
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default UpdateUser;
