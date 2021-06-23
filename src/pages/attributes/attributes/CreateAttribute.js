import React from "react";
import { useFormik } from "formik";
import { ModalBody, Modal } from "reactstrap";
import attributeValidation from "./attributeValidation";
import AttributeForm from "./AttributeForm";
import { connect } from "react-redux";
import { createAttribute } from "../../../store/action";

const CreateAttribute = ({ status, toggle, newAttribute }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      status: false,
    },
    validationSchema: attributeValidation,
    onSubmit: (values, { resetForm }) => {
      values.status = values.status === "true" ? true : false;
      newAttribute(values);
      resetForm();
      toggle();
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
const mapDispatchToProps = (dispatch) => {
  return {
    newAttribute: (payload) => dispatch(createAttribute(payload)),
  };
};
export default connect(null, mapDispatchToProps)(CreateAttribute);
