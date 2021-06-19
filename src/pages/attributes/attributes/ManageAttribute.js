import React from "react";
import { useFormik } from "formik";
import { ModalBody, Modal } from "reactstrap";
import attributeValidation from "./attributeValidation";
import AttributeForm from "./AttributeForm";

const ManageAttribute = ({ status, toggle, attribute }) => {
  const formik = useFormik({
    initialValues: {
      name: attribute.name || "",
      status: attribute.status || false,
    },
    enableReinitialize: true,
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
            submitValue={"Update"}
          />
        </ModalBody>
      </Modal>
    </>
  );
};

export default ManageAttribute;
