import * as yup from "yup";

const categoryFormValidation = yup.object().shape({
  name: yup
    .string()
    .required("Name cannt be Empty")
    .min(5, "store name should be at least 5 characters"),
});
export default categoryFormValidation;
