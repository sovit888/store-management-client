import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import Order from "./Order";
import ReactToPrint from "react-to-print";
import { Button } from "reactstrap";

const PrintOrder = () => {
  const { id } = useParams();
  const componentRef = useRef();

  return (
    <>
      <h4>Print Order</h4>

      <Order id={id} ref={componentRef} />
      <ReactToPrint
        content={() => componentRef.current}
        trigger={() => (
          <Button className="mt-3 custom-btn" color="primary">
            Print
          </Button>
        )}
      />
    </>
  );
};

export default PrintOrder;
