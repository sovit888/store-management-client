import React from "react";
import { useFormik } from "formik";
import brandFormValidation from "./brandFormValidation";
import { Modal, ModalBody } from "reactstrap";
import BrandForm from "./BrandForm";
import { updateBrand } from "../../store/action";
import { connect } from "react-redux";

const ManageBrand = ({ status, toggle, brand, manageBrand }) => {
  const formik = useFormik({
    initialValues: {
      name: brand.name || "",
      status: brand.status || false,
    },
    enableReinitialize: true,
    validationSchema: brandFormValidation,
    onSubmit: (values, { resetForm }) => {
      values.status = values.status === "true" ? true : false;
      manageBrand({ ...values, _id: brand._id });
      resetForm();
      toggle();
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
const mapDispatchToProps = (dispatch) => {
  return {
    manageBrand: (payload) => dispatch(updateBrand(payload)),
  };
};

export default connect(null, mapDispatchToProps)(ManageBrand);
