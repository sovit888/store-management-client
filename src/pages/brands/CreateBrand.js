import React from "react";
import { useFormik } from "formik";
import storeFormValidation from "./brandFormValidation";
import { Modal, ModalBody } from "reactstrap";
import BrandForm from "./BrandForm";

const CreateBrand = ({ status, toggle }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      status: false,
    },
    validationSchema: storeFormValidation,
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
          <p className="font-weight-bold mb-0">Create a New store</p>
          <BrandForm formik={formik} toggle={toggle} submitValue={"Create"} />
        </ModalBody>
      </Modal>
    </>
  );
};

export default CreateBrand;
