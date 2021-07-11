import React, { useEffect, useState } from "react";
import { Col, Row, Button, Form } from "reactstrap";
import {
  FormField,
  FormNormalField,
  SelectField,
  FormDisableField,
  FormRowDisabledField,
} from "./FormComponent";
import { useFormik } from "formik";
import { GET_DETAILS } from "./query";
import { useQuery } from "@apollo/client";
import formValidation from "./formValidation";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createOrder } from "../../../store/action";

const OrderForm = ({ newOrder }) => {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(null);
  const [price, setPrice] = useState(null);
  const { data } = useQuery(GET_DETAILS);
  useEffect(() => {
    if (data) {
      setProducts(data.products);
    }
  }, [data]);
  const formik = useFormik({
    initialValues: {
      customer_name: "",
      customer_phone: "",
      customer_address: "",
      product: "",
      quantity: null,
    },
    validationSchema: formValidation,
    onSubmit: (values) => {
      let total = ((price * quantity - 0.1 * price * quantity) * 1.13).toFixed(
        2
      );
      newOrder({ ...values, total });
      history.push("/order/manage");
    },
  });
  useEffect(() => {
    if (formik.values.quantity != null) {
      setQuantity(Number(formik.values.quantity));
    }
  }, [formik.values.quantity]);
  return (
    <>
      <div className="d-flex justify-content-end">
        <p className="font-weight-bold">
          Date: {new Date().toISOString().split("T")[0]}
        </p>
      </div>
      <Form onSubmit={formik.handleSubmit}>
        <FormField
          id={"customer-name"}
          name="customer_name"
          label="Customer Name"
          formik={formik}
        />
        <FormField
          id={"customer-address"}
          name="customer_address"
          label="Customer Address"
          formik={formik}
        />
        <FormField
          id={"customer-phone"}
          name="customer_phone"
          label="Customer Phone"
          formik={formik}
        />
        <Row>
          <Col xs={5}>
            <SelectField
              id="product"
              name="product"
              label="Product"
              options={products}
              formik={formik}
              setPrice={setPrice}
            />
          </Col>
          <Col xs={2}>
            <FormNormalField
              name="quantity"
              id="quantity"
              label="Qty:"
              formik={formik}
            />
          </Col>
          <Col xs={2}>
            <FormDisableField
              name="rate"
              id="rate"
              label="Rate"
              value={price != null ? price : ""}
            />
          </Col>
          <Col>
            <FormDisableField
              name="amount"
              id="amount"
              label="Amount"
              value={price != null && quantity != null ? price * quantity : ""}
            />
          </Col>
        </Row>
        <div className="d-flex flex-column align-items-end justify-content-end">
          <Col xs={6}>
            <FormRowDisabledField
              name="discount"
              id="discount"
              label="Discount"
              value={
                price != null && quantity != null ? 0.1 * price * quantity : ""
              }
            />
          </Col>
          <Col xs={6}>
            <FormRowDisabledField
              name="vat"
              id="vat"
              label="VAT"
              value={
                price != null && quantity != null
                  ? (
                      (price * quantity - 0.1 * price * quantity) *
                      0.13
                    ).toFixed(2)
                  : ""
              }
            />
          </Col>
          <Col xs={6}>
            <FormRowDisabledField
              name="total-amount"
              id="total-amount"
              label="Total Amount"
              value={
                price != null && quantity != null
                  ? (
                      (price * quantity - 0.1 * price * quantity) *
                      1.13
                    ).toFixed(2)
                  : ""
              }
            />
          </Col>
        </div>
        <Button color="primary" className="custom-btn" type="submit">
          Create Order
        </Button>
      </Form>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    newOrder: (payload) => dispatch(createOrder(payload)),
  };
};
export default connect(null, mapDispatchToProps)(OrderForm);
