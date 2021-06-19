import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Order from "./Order";
import { Button } from "reactstrap";

const PrintOrder = () => {
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
  }, [id]);
  return (
    <>
      <h4>Print Order</h4>
      <Order />
      <Button color="primary" className="custom-btn mt-3">
        Print
      </Button>
    </>
  );
};

export default PrintOrder;
