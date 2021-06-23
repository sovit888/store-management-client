import React, { useState } from "react";
import { useFormik } from "formik";
import userValidation from "./userValidation";
import {
  FormGroup,
  Label,
  Input,
  Button,
  Form,
  FormFeedback,
} from "reactstrap";
import { getGroup } from "../../../store/action";
import { connect } from "react-redux";

const NewUser = ({ groups, loadGroups }) => {
  useState(() => {
    loadGroups();
  }, [loadGroups]);
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
      group: "",
    },
    validationSchema: userValidation,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });
  return (
    <>
      <div className="bg-white p-2">
        <h3>Create a New User</h3>
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
          <FormGroup>
            <Label for="settinggroup">Group</Label>
            <Input
              type="select"
              name="group"
              id="settinggroup"
              value={formik.values.group}
              onChange={formik.handleChange}
            >
              {groups.lists.map((value, index) => {
                return (
                  <option key={index} value={value._id}>
                    {value.name}
                  </option>
                );
              })}
            </Input>
          </FormGroup>
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
            Create user
          </Button>
        </Form>
      </div>
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
const mapStateToProps = (state) => {
  return {
    groups: state.groups,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadGroups: () => dispatch(getGroup()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewUser);
