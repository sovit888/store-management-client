import React from "react";
import { useFormik } from "formik";
import { ModalBody, Modal } from "reactstrap";
import valueValidation from "./valueValidation";
import ValueForm from "./ValueForm";

const CreateValue = ({ status, toggle }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      status: false,
    },
    validationSchema: valueValidation,
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
          <p>Create a New Value</p>
          <ValueForm formik={formik} toggle={toggle} submitValue={"Create"} />
        </ModalBody>
      </Modal>
    </>
  );
};

export default CreateValue;
