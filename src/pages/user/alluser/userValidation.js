import * as yup from "yup";

const userValidation = yup.object().shape({
  email: yup.string().email("enter avalid email").required("Email is required"),
  first_name: yup
    .string()
    .required("First name is required")
    .min(2, "First name shoud be 2 characters"),
  last_name: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name shoud be 2 characters"),
  phone: yup
    .string()
    .required("phone is required")
    .min(8, "phone shoud be 8 characters")
    .max(14, "phone shouldnot more than 14"),
  username: yup
    .string()
    .required("User name is required")
    .min(5, "username should be at least 5 characters"),
  password: yup
    .string()
    .required("password is required")
    .matches(/[A-Z]/, "password should contain 1 capital letter")
    .matches(/\d/, "password should contain 1 digits")
    .matches(/[!@#$%^&*-_=+/><]/, "password should contain 1 characters")
    .min(8, "password should be at least 8 characters"),
  confirm_password: yup
    .string()
    .required("password cannot be empty")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  group: yup.string().required("Group cannt be empty"),
});
export default userValidation;
