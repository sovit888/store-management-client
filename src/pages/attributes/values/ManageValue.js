import React from "react";
import { useFormik } from "formik";
import { ModalBody, Modal } from "reactstrap";
import valueValidation from "./valueValidation";
import ValueForm from "./ValueForm";
import axios from "axios";

const ManageValue = ({
  status,
  toggle,
  value,
  setAttributeValues,
  attributes,
  id,
}) => {
  const formik = useFormik({
    initialValues: {
      name: value.name || "",
      status: value.status || false,
    },
    enableReinitialize: true,
    validationSchema: valueValidation,
    onSubmit: (values, { resetForm }) => {
      values.status = values.status === "true" ? true : false;
      axios
        .put(
          `http://localhost:2000/api/${id}/values`,
          { ...values, _id: value._id },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((result) => {
          let newList = [...attributes];
          let index = newList.findIndex(
            (list) => list._id === result.data.values._id
          );
          newList[index] = result.data.values;
          setAttributeValues(newList);
        });
      resetForm();
      toggle();
    },
  });
  return (
    <>
      <Modal isOpen={status}>
        <ModalBody>
          <p>Create a New Values</p>
          <ValueForm formik={formik} toggle={toggle} submitValue={"Update"} />
        </ModalBody>
      </Modal>
    </>
  );
};

export default ManageValue;
