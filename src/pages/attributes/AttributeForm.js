import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const AttributeForm = () => {
  return (
    <>
      <FormGroup>
        <Label for="attribute-name" className="custom-label">
          Name
        </Label>
        <Input type="text" className="custom-input" />
      </FormGroup>
    </>
  );
};

export default AttributeForm;
