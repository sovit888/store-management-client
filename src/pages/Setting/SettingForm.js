import React from "react";
import {
  FormGroup,
  Label,
  Input,
  Button,
  Form,
  FormFeedback,
} from "reactstrap";
import settingFormValidation from "./settingFormValidation";
import { useFormik } from "formik";

const SettingForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      first_name: "",
      last_name: "",
      phone: "",
      gender: "Male",
      password: "",
      confirm_password: "",
    },
    validationSchema: settingFormValidation,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });
  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <FormField
          type="email"
          id="settingemail"
          label={"Email"}
          name={"email"}
          formik={formik}
        />
        <FormField
          type="text"
          id="settingusername"
          label={"Username"}
          name={"username"}
          formik={formik}
        />
        <FormField
          type="text"
          id="settingfirstname"
          label={"First Name"}
          name={"first_name"}
          formik={formik}
        />
        <FormField
          type="text"
          id="settinglastname"
          label={"Last Name"}
          name={"last_name"}
          formik={formik}
        />
        <FormGroup>
          <Label for="settinggender">Gender</Label>
          <Input
            type="select"
            name="gender"
            id="settinggender"
            value={formik.values.gender}
            onChange={formik.handleChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Input>
        </FormGroup>
        <FormField
          type="text"
          id="settingphone"
          label={"Phone"}
          name={"phone"}
          formik={formik}
        />
        <FormField
          type="password"
          id="settingpassword"
          label={"New Password"}
          name={"password"}
          formik={formik}
        />
        <FormField
          type="password"
          id="settingconfirmpassword"
          label={"Confirm Password"}
          name={"confirm_password"}
          formik={formik}
        />
        <Button className="custom-btn custom-btn-primary mt-3" type="submit">
          Update
        </Button>
      </Form>
    </>
  );
};

const FormField = ({ type, id, name, label, formik }) => {
  return (
    <FormGroup className="mb-0">
      <Label for={id}>{label}:</Label>
      <Input
        type={type}
        name={name}
        id={id}
        className="custom-input"
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        invalid={formik.touched[name] && formik.errors[name] ? true : false}
      />
      <FormFeedback>
        {formik.touched[name] && formik.errors[name] ? formik.errors[name] : ""}
      </FormFeedback>
    </FormGroup>
  );
};

export default SettingForm;
