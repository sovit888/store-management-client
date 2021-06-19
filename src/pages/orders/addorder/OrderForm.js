import React from "react";
import { Col, Row, Button } from "reactstrap";
import {
  FormField,
  FormNormalField,
  SelectField,
  FormDisableField,
  FormRowDisabledField,
} from "./FormComponent";

const OrderForm = () => {
  return (
    <>
      <div className="d-flex justify-content-end">
        <p className="font-weight-bold">
          Date: {new Date().toISOString().split("T")[0]}
        </p>
      </div>
      <FormField
        id={"customer-name"}
        name="customer_name"
        label="Customer Name"
      />
      <FormField
        id={"customer-address"}
        name="customer_address"
        label="Customer Address"
      />
      <FormField
        id={"customer-phone"}
        name="customer_phone"
        label="Customer Phone"
      />
      <Row>
        <Col xs={5}>
          <SelectField
            id="product"
            name="product"
            label="Product"
            options={["Jacket", "Shoes"]}
          />
        </Col>
        <Col xs={2}>
          <FormNormalField name="quantity" id="quantity" label="Qty:" />
        </Col>
        <Col xs={2}>
          <FormDisableField name="rate" id="rate" label="Rate" value={20} />
        </Col>
        <Col>
          <FormDisableField
            name="amount"
            id="amount"
            label="Amount"
            value={20}
          />
        </Col>
      </Row>
      <div className="d-flex flex-column align-items-end justify-content-end">
        <Col xs={6}>
          <FormRowDisabledField
            name="gross_amount"
            id="gross-amount"
            label="Gross Amount"
            value={20}
          />
        </Col>
        <Col xs={6}>
          <FormRowDisabledField
            name="discount"
            id="discount"
            label="Discount"
            value={20}
          />
        </Col>
        <Col xs={6}>
          <FormRowDisabledField name="vat" id="vat" label="VAT" value={20} />
        </Col>
        <Col xs={6}>
          <FormRowDisabledField
            name="total-amount"
            id="total-amount"
            label="Total Amount"
            value={20}
          />
        </Col>
      </div>
      <Button color="primary" className="custom-btn">
        Create Order
      </Button>
    </>
  );
};

export default OrderForm;
