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
      attributes: false,
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
      <Form onSubmit={formik.handleSubmit} className="p-4 bg-white">
        <FormGroup>
          <Label for="groupname" className="custom-label">
            Name
          </Label>
          <Input
            type="text"
            name="name"
            id="groupname"
            value={formik.values.name}
            className="custom-input"
            onChange={formik.handleChange}
            invalid={formik.touched.name && formik.errors.name ? true : false}
          />
          <FormFeedback>
            {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : ""}
          </FormFeedback>
        </FormGroup>
        <CheckGroup name={"groups"} label={"Groups"} formik={formik} />
        <CheckGroup name={"brands"} label={"Brands"} formik={formik} />
        <CheckGroup name={"categorys"} label={"Categorys"} formik={formik} />
        <CheckGroup name={"products"} label={"Products"} formik={formik} />
        <CheckGroup name={"attributes"} label={"Attributes"} formik={formik} />
        <Button type="submit" className="custom-btn custom-btn-primary mt-2">
          Create
        </Button>
      </Form>
    </>
  );
};

const CheckGroup = ({ name, label, formik }) => {
  return (
    <FormGroup check>
      <Label check>
        <Input
          type="checkbox"
          name={name}
          onChange={formik.handleChange}
          checked={formik.values[name]}
        />{" "}
        {label} permissions
      </Label>
    </FormGroup>
  );
};

export default NewGroup;
