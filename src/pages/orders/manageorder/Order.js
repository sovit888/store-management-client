import React from "react";
import { Row, Col, FormGroup, Label, Input } from "reactstrap";

const Order = () => {
  return (
    <>
      <div className="bg-white p-3">
        <div className="d-flex justify-content-end font-weight-bold">
          Date : {new Date().toISOString().split("T")[0]}
        </div>
        <p className="mb-0 font-weight-bold">Name:Sovit Thapa</p>
        <p className="mb-0 font-weight-bold">Address:jamune,Tanahun</p>
        <p className="mb-0 font-weight-bold">Contact:9826184961</p>
        <Row>
          <Col xs={5}>
            <FormField label="Product" value="Jacket" />
          </Col>
          <Col xs={2}>
            <FormField label="Quantity" value="2" />
          </Col>
          <Col xs={2}>
            <FormField label="Rate" value="120" />
          </Col>
          <Col xs={3}>
            <FormField label="Amount" value="240" />
          </Col>
        </Row>
        <p className="mb-0 font-weight-bold">Gross Amount:240</p>
        <p className="mb-0 font-weight-bold">Discount:10%</p>
        <p className="mb-0 font-weight-bold">VAT: 13%</p>
        <p className="mb-0 font-weight-bold">New Amount:233</p>
        <p className="mb-0 font-weight-bold">Paid Status: unpiad</p>
      </div>
    </>
  );
};

const FormField = ({ label, value }) => {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input type="text" value={value} disabled />
    </FormGroup>
  );
};

export default Order;
