import * as yup from "yup";
const groupValidation = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name should be at least 3 characters"),
});

export default groupValidation;
