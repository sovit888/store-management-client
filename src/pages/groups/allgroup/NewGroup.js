import React from "react";
import { useFormik } from "formik";
import groupValidation from "./groupValidation";
import {
  Label,
  Input,
  FormGroup,
  Form,
  Button,
  FormFeedback,
} from "reactstrap";

const NewGroup = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      groups: false,
      brands: false,
      categorys: false,
      products: false,
      stores: false,
    },
    validationSchema: groupValidation,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });
  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <FormGroup>
          <Label for="groupname">Name</Label>
          <Input
            type="text"
            name="name"
            id="groupname"
            value={formik.values.name}
            invalid={formik.touched.name && formik.errors.name ? true : false}
          />
          <FormFeedback>
            {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : ""}
          </FormFeedback>
        </FormGroup>
        <Button type="submit" className="custom-btn custom-btn-primary mt-0">
          Create
        </Button>
      </Form>
    </>
  );
};

export default NewGroup;
