import React from "react";
import { useFormik } from "formik";
import { ModalBody, Modal } from "reactstrap";
import valueValidation from "./valueValidation";
import ValueForm from "./ValueForm";
import axios from "axios";

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
      axios
        .post(
          `http://localhost:2000/api/${id}/values`,
          { ...values, attribute: id },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
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
