import React from "react";
import { useFormik } from "formik";
import storeFormValidation from "./storeFormValidation";
import { Modal, ModalBody } from "reactstrap";
import StoreForm from "./StoreForm";
import { connect } from "react-redux";
import { updateStore } from "../../store/action";

const ManageStore = ({ status, toggle, store, manageStore }) => {
  const formik = useFormik({
    initialValues: {
      name: store.name || "",
      status: store.status || false,
    },
    enableReinitialize: true,
    validationSchema: storeFormValidation,
    onSubmit: (values) => {
      values.status = values.status === "true" ? true : false;
      manageStore({ ...values, _id: store._id });
      toggle();
    },
  });

  return (
    <>
      <Modal isOpen={status}>
        <ModalBody>
          <p className="font-weight-bold mb-0">Update store</p>
          <StoreForm formik={formik} toggle={toggle} submitValue={"Update"} />
        </ModalBody>
      </Modal>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    manageStore: (payload) => dispatch(updateStore(payload)),
  };
};
export default connect(null, mapDispatchToProps)(ManageStore);
