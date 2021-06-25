import * as yup from "yup";

const formValidation = yup.object().shape({
  customer_name: yup
    .string()
    .required("Name is requird")
    .min(2, "name should be at least 2 characetrs"),
  customer_address: yup
    .string()
    .required("Address is requird")
    .min(2, "Address should be at least 2 characetrs"),
  customer_phone: yup
    .string()
    .required("Phone is requird")
    .min(8, "Phone should be at least 8 characetrs"),
  quantity: yup.string().required("Quantity is required"),
  product: yup.string().required("Product is required"),
});

export default formValidation;
