import * as yup from "yup";
const valueValidation = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name should be minimum 3 digits"),
});

export default valueValidation;
