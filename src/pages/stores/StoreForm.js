import React from "react";
import {
  FormGroup,
  Form,
  Input,
  Label,
  Button,
  FormFeedback,
} from "reactstrap";

const StoreForm = ({ formik, toggle, submitValue }) => {
  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <FormGroup>
          <Label for="name" className="custom-label">
            Name:
          </Label>
          <Input
            type="text"
            name="name"
            id="store_name"
            className="custom-input mt-1 mb-1"
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
          <Label for="store_status" className="custom-label">
            Status
          </Label>
          <Input
            type="select"
            name="status"
            id="store_status"
            className="custom-input mt-1 mb-3"
            value={formik.values.status}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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

export default StoreForm;
