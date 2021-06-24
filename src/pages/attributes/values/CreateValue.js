import React from "react";
import { useFormik } from "formik";
import { ModalBody, Modal } from "reactstrap";
import valueValidation from "./valueValidation";
import ValueForm from "./ValueForm";
import authAxios from "../../../utils/authAxios";

const CreateValue = ({
  status,
  toggle,
  attributeValues,
  setAttributeValues,
  id,
}) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      status: false,
    },
    validationSchema: valueValidation,
    onSubmit: (values, { resetForm }) => {
      values.status = values.status === "true" ? true : false;
      authAxios
        .post(`/${id}/values`, { ...values, attribute: id })
        .then((result) => {
          setAttributeValues([result.data.value, ...attributeValues]);
        });
      resetForm();
      toggle();
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
