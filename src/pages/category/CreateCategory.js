import React from "react";
import { useFormik } from "formik";
import categoryFormValidation from "./categoryFormValidation";
import { Modal, ModalBody } from "reactstrap";
import CategoryForm from "./CategoryForm";
import { connect } from "react-redux";
import { createCategory } from "../../store/action";

const CreateCategory = ({ status, toggle, newCategory }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      status: false,
    },
    validationSchema: categoryFormValidation,
    onSubmit: (values, { resetForm }) => {
      values.status = values.status === "true" ? true : false;
      newCategory(values);
      resetForm();
      toggle();
    },
  });

  return (
    <>
      <Modal isOpen={status}>
        <ModalBody>
          <p className="font-weight-bold mb-0">Create a New category</p>
          <CategoryForm
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
    newCategory: (payload) => dispatch(createCategory(payload)),
  };
};

export default connect(null, mapDispatchToProps)(CreateCategory);
