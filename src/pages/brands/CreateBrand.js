import React from "react";
import { useFormik } from "formik";
import brandFormValidation from "./brandFormValidation";
import { Modal, ModalBody } from "reactstrap";
import BrandForm from "./BrandForm";
import { createBrand } from "../../store/action";
import { connect } from "react-redux";

const CreateBrand = ({ status, toggle, newBrand }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      status: false,
    },
    validationSchema: brandFormValidation,
    onSubmit: (values, { resetForm }) => {
      values.status = values.status === "true" ? true : false;
      newBrand(values);
      resetForm();
      toggle();
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
const mapDispatchToProps = (dispatch) => {
  return {
    newBrand: (brand) => dispatch(createBrand(brand)),
  };
};

export default connect(null, mapDispatchToProps)(CreateBrand);
