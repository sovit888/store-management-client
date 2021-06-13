import React from "react";
import { useFormik } from "formik";
import categoryFormValidation from "./categoryFormValidation";
import { Modal, ModalBody } from "reactstrap";
import CategoryForm from "./CategoryForm";

const CreateCategory = ({ status, toggle }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      status: false,
    },
    validationSchema: categoryFormValidation,
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

export default CreateCategory;
