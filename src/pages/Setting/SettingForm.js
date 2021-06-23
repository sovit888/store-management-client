import React, { useEffect } from "react";
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
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateProfile, getProfile } from "../../store/action";

const SettingForm = ({ profile, manageProfile, loadProfile }) => {
  useEffect(() => {
    loadProfile();
  }, [loadProfile]);
  const formik = useFormik({
    initialValues: {
      username: profile.info.username || "",
      first_name: profile.info.first_name || "",
      last_name: profile.info.last_name || "",
      phone: profile.info.phone || "",
      gender: profile.info.gender || "Male",
    },
    validationSchema: settingFormValidation,
    onSubmit: (values, { resetForm }) => {
      manageProfile(values);
      resetForm();
    },
  });
  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
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
        <Button className="custom-btn custom-btn-primary mt-3" type="submit">
          Update Info
        </Button>
        <Link
          to="/setting/password"
          className="custom-btn custom-btn-primary btn text-white mt-3"
        >
          Update Password
        </Link>
      </Form>
    </>
  );
};

export const FormField = ({ type, id, name, label, formik }) => {
  return (
    <FormGroup className="mb-0">
      <Label for={id} className="custm-label">
        {label}:
      </Label>
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
  return { profile: state.profile };
};
const mapDispatchTProps = (dispatch) => {
  return {
    manageProfile: (payload) => dispatch(updateProfile(payload)),
    loadProfile: () => dispatch(getProfile()),
  };
};
export default connect(mapStateToProps, mapDispatchTProps)(SettingForm);
