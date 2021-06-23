import React from "react";
import { useFormik } from "formik";
import { ModalBody, Modal } from "reactstrap";
import attributeValidation from "./attributeValidation";
import AttributeForm from "./AttributeForm";
import { connect } from "react-redux";
import { updateAttribute } from "../../../store/action";

const ManageAttribute = ({ status, toggle, attribute, manageAttribute }) => {
  const formik = useFormik({
    initialValues: {
      name: attribute.name || "",
      status: attribute.status || false,
    },
    enableReinitialize: true,
    validationSchema: attributeValidation,
    onSubmit: (values, { resetForm }) => {
      values.status = values.status === "true" ? true : false;
      manageAttribute({ ...values, _id: attribute._id });
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
            submitValue={"Update"}
          />
        </ModalBody>
      </Modal>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    manageAttribute: (payload) => dispatch(updateAttribute(payload)),
  };
};
export default connect(null, mapDispatchToProps)(ManageAttribute);
