import React from "react";
import { useFormik } from "formik";
import storeFormValidation from "./storeFormValidation";
import { Modal, ModalBody } from "reactstrap";
import StoreForm from "./StoreForm";

const CreateStore = ({ status, toggle }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      status: false,
    },
    validationSchema: storeFormValidation,
    onSubmit: (values, { resetForm }) => {
      values.status = values.status === "true" ? true : false;
      console.log(values);
      resetForm();
    },
  });

  return (
    <>
      <Modal isOpen={status}>
        <ModalBody>
          <p className="font-weight-bold mb-0">Create a New store</p>
          <StoreForm formik={formik} toggle={toggle} />
        </ModalBody>
      </Modal>
    </>
  );
};

export default CreateStore;
