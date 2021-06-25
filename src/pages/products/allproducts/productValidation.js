import * as yup from "yup";

const productValidation = yup.object().shape({
  name: yup
    .string()
    .required("name cannot be empty")
    .min(3, "name should be at least 3 characetrs"),
  price: yup.string().required("Price cannot be empty"),
  store: yup.string().required("Store cannot be empty"),
  brand: yup.string().required("Brand cannot be empty"),
  category: yup.string().required("Category cannot be empty"),
});
export default productValidation;
