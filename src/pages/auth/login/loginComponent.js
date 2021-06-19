import { FormGroup, Label, Input, FormFeedback } from "reactstrap";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const EmailField = ({ formik }) => {
  return (
    <FormGroup>
      <Label for="email" className="custom-label">
        Email:
      </Label>
      <Input
        type="email"
        name="email"
        id="email"
        className="custom-input"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        invalid={formik.errors.email && formik.touched.email ? true : false}
      />
      <FormFeedback>
        {formik.errors.email && formik.touched.email ? formik.errors.email : ""}
      </FormFeedback>
    </FormGroup>
  );
};

export const PasswordField = ({ formik }) => {
  const [status, setStatus] = useState(false);
  const handleToggle = () => setStatus(!status);
  return (
    <FormGroup>
      <Label for="password" className="custom-label">
        Password:
      </Label>
      <div className="password-field">
        <Input
          type={status ? "text" : "password"}
          name="password"
          id="password"
          className="custom-input"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          invalid={
            formik.errors.password && formik.touched.password ? true : false
          }
        />
        {status ? (
          <FaEyeSlash onClick={handleToggle} />
        ) : (
          <FaEye onClick={handleToggle} />
        )}
      </div>
      <FormFeedback className="password">
        {formik.errors.password && formik.touched.password
          ? formik.errors.password
          : ""}
      </FormFeedback>
    </FormGroup>
  );
};
