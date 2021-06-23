import * as yup from "yup";

const settingFormValidation = yup.object().shape({
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
});
export default settingFormValidation;
