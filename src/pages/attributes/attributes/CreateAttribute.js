import React from "react";
import { useFormik } from "formik";
import { ModalBody, Modal } from "reactstrap";
import attributeValidation from "./attributeValidation";
import AttributeForm from "./AttributeForm";

const CreateAttribute = ({ status, toggle }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      status: false,
    },
    validationSchema: attributeValidation,
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
          <p>Create a New Attribute</p>
          <AttributeForm
            formik={formik}
            toggle={toggle}
            submitValue={"Create"}
          />
        </ModalBody>
      </Modal>
    </>
  );
};

export default CreateAttribute;
