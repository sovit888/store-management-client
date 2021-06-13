import React from "react";
import { useFormik } from "formik";
import storeFormValidation from "./storeFormValidation";
import { Modal, ModalBody } from "reactstrap";
import StoreForm from "./StoreForm";

const ManageStore = ({ status, toggle, store }) => {
  const formik = useFormik({
    initialValues: {
      name: store.name || "",
      status: store.status || false,
    },
    enableReinitialize: true,
    validationSchema: storeFormValidation,
    onSubmit: (values) => {
      console.log(values);
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

export default ManageStore;
