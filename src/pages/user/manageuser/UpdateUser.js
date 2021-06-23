import React, { useEffect } from "react";
import { Modal, ModalBody, FormGroup, Label, Input, Button } from "reactstrap";
import { getGroup } from "../../../store/action";
import { connect } from "react-redux";

const UpdateUser = ({ status, toggle, user, groups, loadGroups }) => {
  useEffect(() => {
    loadGroups();
  }, [loadGroups]);
  const [group, setGroup] = React.useState("User");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
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
              {groups.lists.map((value, index) => {
                return (
                  <option key={index} value={value._id}>
                    {value.name}
                  </option>
                );
              })}
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
const mapStateToProps = (state) => {
  return {
    groups: state.groups,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadGroups: () => dispatch(getGroup()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser);
