import React from "react";
import {
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
  Form,
} from "reactstrap";

const AttributeForm = ({ formik, submitValue, toggle }) => {
  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <FormGroup>
          <Label for="attribute-name" className="custom-label">
            Name
          </Label>
          <Input
            type="text"
            name="name"
            id="attribute-name"
            className="custom-input pb-0"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            invalid={formik.errors.name && formik.touched.name ? true : false}
          />
          <FormFeedback>
            {formik.errors.name && formik.touched.name
              ? formik.errors.name
              : ""}
          </FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="attribute-status" className="custom-label">
            Status
          </Label>
          <Input
            type="select"
            className="custom-input"
            id="attribute-status"
            name="status"
            onChange={formik.handleChange}
          >
            <option value={false}>Inactive</option>
            <option value={true}>Active</option>
          </Input>
        </FormGroup>
        <div className="w-100 d-flex justify-content-between">
          <Button type="submit" className="custom-btn custom-btn-primary">
            {submitValue}
          </Button>
          <Button
            className="ml-auto custom-btn"
            onClick={toggle}
            color="danger"
          >
            Cancel
          </Button>
        </div>
      </Form>
    </>
  );
};

export default AttributeForm;
