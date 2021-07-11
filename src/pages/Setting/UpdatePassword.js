import React from "react";
import { useFormik } from "formik";
import { FormField } from "./SettingForm";
import { Form, Button } from "reactstrap";
import passwordValidation from "./passwordValidation";
import axios from "axios";
import { useHistory } from "react-router-dom";

const UpdatePassword = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_password: "",
    },
    validationSchema: passwordValidation,
    onSubmit: (values) => {
      axios
        .post("http://localhost:2000/api/password/update", values, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((result) => {
          history.push("/profile");
        });
    },
  });
  return (
    <>
      <div className="bg-white p-2">
        <Form onSubmit={formik.handleSubmit}>
          <FormField
            name="password"
            id="password"
            label="Password"
            formik={formik}
            type="password"
          />
          <FormField
            name="confirm_password"
            id="confirm_password"
            label="Confirm Password"
            formik={formik}
            type="password"
          />
          <Button className="custom-btn custom-btn-primary mt-3" type="submit">
            Update
          </Button>
        </Form>
      </div>
    </>
  );
};

export default UpdatePassword;
