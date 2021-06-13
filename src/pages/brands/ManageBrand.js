import React from "react";
import { useFormik } from "formik";
import brandFormValidation from "./brandFormValidation";
import { Modal, ModalBody } from "reactstrap";
import BrandForm from "./BrandForm";

const ManageBrand = ({ status, toggle, brand }) => {
  const formik = useFormik({
    initialValues: {
      name: brand.name || "",
      status: brand.status || false,
    },
    enableReinitialize: true,
    validationSchema: brandFormValidation,
    onSubmit: (values) => {
      values.status = values.status === "true" ? true : false;
      console.log(values);
    },
  });

  return (
    <>
      <Modal isOpen={status}>
        <ModalBody>
          <p className="font-weight-bold mb-0">Update store</p>
          <BrandForm formik={formik} toggle={toggle} submitValue={"Update"} />
        </ModalBody>
      </Modal>
    </>
  );
};

export default ManageBrand;
