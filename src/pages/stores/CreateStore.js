import React from "react";
import { useFormik } from "formik";
import storeFormValidation from "./storeFormValidation";
import { Modal, ModalBody } from "reactstrap";
import StoreForm from "./StoreForm";
import { connect } from "react-redux";
import { createStore } from "../../store/action";

const CreateStore = ({ status, toggle, newStore }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      status: false,
    },
    validationSchema: storeFormValidation,
    onSubmit: (values, { resetForm }) => {
      values.status = values.status === "true" ? true : false;
      newStore(values);
      resetForm();
      toggle();
    },
  });

  return (
    <>
      <Modal isOpen={status}>
        <ModalBody>
          <p className="font-weight-bold mb-0">Create a New store</p>
          <StoreForm formik={formik} toggle={toggle} submitValue={"Create"} />
        </ModalBody>
      </Modal>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    newStore: (payload) => dispatch(createStore(payload)),
  };
};
export default connect(null, mapDispatchToProps)(CreateStore);
