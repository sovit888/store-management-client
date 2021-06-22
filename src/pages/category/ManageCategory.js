import React from "react";
import { useFormik } from "formik";
import categoryFormValidation from "./categoryFormValidation";
import { Modal, ModalBody } from "reactstrap";
import CategoryForm from "./CategoryForm";
import { connect } from "react-redux";
import { updateCategory } from "../../store/action";

const ManageCategory = ({ status, toggle, category, manageCategory }) => {
  const formik = useFormik({
    initialValues: {
      name: category.name || "",
      status: category.status || false,
    },
    enableReinitialize: true,
    validationSchema: categoryFormValidation,
    onSubmit: (values, { resetForm }) => {
      values.status = values.status === "true" ? true : false;
      manageCategory({ ...values, _id: category._id });
      resetForm();
      toggle();
    },
  });

  return (
    <>
      <Modal isOpen={status}>
        <ModalBody>
          <p className="font-weight-bold mb-0">Update category</p>
          <CategoryForm
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
    manageCategory: (payload) => dispatch(updateCategory(payload)),
  };
};
export default connect(null, mapDispatchToProps)(ManageCategory);
