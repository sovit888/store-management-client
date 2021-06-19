import * as yup from "yup";
const groupValidation = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(4, "Name should be at least 4 characters"),
});

export default groupValidation;
