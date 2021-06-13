import React from "react";
import { useFormik } from "formik";
import categoryFormValidation from "./categoryFormValidation";
import { Modal, ModalBody } from "reactstrap";
import CategoryForm from "./CategoryForm";

const ManageCategory = ({ status, toggle, category }) => {
  const formik = useFormik({
    initialValues: {
      name: category.name || "",
      status: category.status || false,
    },
    enableReinitialize: true,
    validationSchema: categoryFormValidation,
    onSubmit: (values) => {
      values.status = values.status === "true" ? true : false;
      console.log(values);
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

export default ManageCategory;
