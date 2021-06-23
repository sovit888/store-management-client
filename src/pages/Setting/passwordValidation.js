import * as yup from "yup";
const passwordValidation = yup.object().shape({
  password: yup
    .string()
    .required("password is required")
    .matches(/[A-Z]/, "password should contain 1 capital letter")
    .matches(/\d/, "password should contain 1 digits")
    .matches(/[!@#$%^&*-_=+/><]/, "password should contain 1 characters")
    .min(8, "password should be at least 8 characters"),
  confirm_password: yup
    .string()
    .required("It cannot be empty")
    .oneOf([yup.ref("password")], "Password must be same"),
});
export default passwordValidation;
