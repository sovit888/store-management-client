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

const GroupForm = ({ group }) => {
  const formik = useFormik({
    initialValues: {
      name: group.name || "",
      attributes: group.attributes || false,
      brands: group.brands || false,
      categorys: group.categorys || false,
      products: group.products || false,
      stores: group.stores || false,
    },
    enableReinitialize: true,
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
          <Label for="groupname">Name</Label>
          <Input
            type="text"
            name="name"
            id="groupname"
            value={formik.values.name}
            onChange={formik.handleChange}
            invalid={formik.touched.name && formik.errors.name ? true : false}
          />
          <FormFeedback>
            {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : ""}
          </FormFeedback>
        </FormGroup>
        <CheckGroup name={"stores"} label={"Stores"} formik={formik} />
        <CheckGroup name={"brands"} label={"Brands"} formik={formik} />
        <CheckGroup name={"categorys"} label={"Categorys"} formik={formik} />
        <CheckGroup name={"products"} label={"Products"} formik={formik} />
        <CheckGroup name={"attributes"} label={"Attributes"} formik={formik} />
        <Button type="submit" className="custom-btn mt-2" color="primary">
          Update
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

export default GroupForm;
