import * as yup from "yup";

const brandFormValidation = yup.object().shape({
  name: yup
    .string()
    .required("Name cannt be Empty")
    .min(5, "Brand name should be at least 5 characters"),
});
export default brandFormValidation;
