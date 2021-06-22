import * as yup from "yup";

const brandFormValidation = yup.object().shape({
  name: yup
    .string()
    .required("Name cannt be Empty")
    .min(3, "Brand name should be at least 3 characters"),
});
export default brandFormValidation;
