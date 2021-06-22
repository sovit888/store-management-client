import React, { useState } from "react";
import { Form, Button, UncontrolledAlert } from "reactstrap";
import { EmailField, PasswordField } from "./loginComponent";
import "./login.css";
import { useFormik } from "formik";
import loginValidation from "./loginValidation";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

const Login = ({ history }) => {
  const [error, setError] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: (values, { resetForm }) => {
      axios
        .post("http://localhost:2000/api/auth/login", values)
        .then((result) => {
          localStorage.setItem("token", result.data.token);
          history.push("/");
        })
        .catch((error) => {
          setError("Invalid Credentials");
        });
      resetForm();
    },
  });
  return (
    <div className="full-height">
      {error && <UncontrolledAlert color="danger">{error}</UncontrolledAlert>}

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

export default withRouter(Login);
