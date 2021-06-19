import * as yup from "yup";

const loginValidation = yup.object().shape({
  email: yup.string().email("enter avalid email").required("Email is required"),
  password: yup
    .string()
    .required("password is required")
    .matches(/[A-Z]/, "password should contain 1 capital letter")
    .matches(/\d/, "password should contain 1 digits")
    .matches(/[!@#$%^&*-_=+/><]/, "password should contain 1 characters")
    .min(8, "password should be at least 8 characters"),
});

export default loginValidation;
