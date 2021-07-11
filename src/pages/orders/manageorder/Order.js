import React, { useEffect, useState } from "react";
import { Row, Col, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Order = ({ id }) => {
  const history = useHistory();
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:2000/api//order/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((result) => {
        setData(result.data.order);
        console.log(result.data);
      })
      .catch((error) => {
        history.push("/order/manage");
      });
  }, [id, history]);
  return (
    <>
      <div className="bg-white p-3">
        <div className="d-flex justify-content-end font-weight-bold">
          Date : {new Date().toISOString().split("T")[0]}
        </div>
        <p className="mb-0 font-weight-bold">
          Name:{data && data.customer_name}
        </p>
        <p className="mb-0 font-weight-bold">
          Address:{data && data.customer_address}
        </p>
        <p className="mb-0 font-weight-bold">
          Contact:{data && data.customer_phone}
        </p>
        <Row>
          <Col xs={5}>
            <FormField
              label="Product"
              value={data && data.product && data.product.name}
            />
          </Col>
          <Col xs={2}>
            <FormField label="Quantity" value={data && data.quantity} />
          </Col>
          <Col xs={2}>
            <FormField
              label="Rate"
              value={data && data.product && data.product.price}
            />
          </Col>
          <Col xs={3}>
            <FormField
              label="Amount"
              value={
                ((data && data.quantity) || 0) *
                ((data && data.product && data.product.price) || 0)
              }
            />
          </Col>
        </Row>
        <p className="mb-0 font-weight-bold">
          Discount:
          {((data && data.quantity) || 0) *
            ((data && data.product && data.product.price) || 0) *
            0.1}
        </p>
        <p className="mb-0 font-weight-bold">
          VAT:
          {data &&
            data.total -
              (data && data.quantity) *
                ((data && data.product && data.product.price) || 0) *
                0.9}
        </p>
        <p className="mb-0 font-weight-bold">Total: {data && data.total}</p>
        <p className="mb-0 font-weight-bold">
          Paid Status: {data && data.status ? "paid" : "unpiad"}
        </p>
      </div>
    </>
  );
};

const FormField = ({ label, value }) => {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input type="text" value={value} onChange={(e) => {}} disabled />
    </FormGroup>
  );
};

export default Order;
