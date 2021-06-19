import React from "react";
import { Form, Button } from "reactstrap";
import { EmailField, PasswordField } from "./loginComponent";
import "./login.css";
import { useFormik } from "formik";
import loginValidation from "./loginValidation";
import { Link } from "react-router-dom";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });
  return (
    <div className="full-height">
      <div className="login-card py-4 px-3 bg-white">
        <Form onSubmit={formik.handleSubmit}>
          <EmailField formik={formik} />
          <PasswordField formik={formik} />,
          <Button type="submit" color="primary" className="custom-btn mt-0">
            Login
          </Button>
          <div className="text-center mt-0 pt-0">
            <Link to="/" className="forget-link">
              Forget Password
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
