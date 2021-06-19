import React from "react";
import { MDBDataTable, MDBTooltip } from "mdbreact";
import { FaPrint, FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
const show = (status) => {
  return status ? (
    <npiadspan className="bg-success p-1 text-white rounded-border">
      Paid
    </npiadspan>
  ) : (
    <span className="bg-warning p-1 rounded-border">Unpaid</span>
  );
};

const orderLists = [
  {
    customer_name: "Sovit Thapa",
    customer_address: "Jamune",
    total_products: 10,
    total_amounts: 2000,
    paid_status: false,
    _id: 14,
  },
];

const OrderTable = () => {
  const data = {
    columns: [
      {
        label: "Customer Name",
        field: "customer_name",
        width: 200,
      },
      {
        label: "Customer Address",
        field: "customer_address",
        width: 200,
      },
      {
        label: "Date Time",
        field: "date",
        width: 200,
      },
      {
        label: "Total Products",
        field: "total_products",
        width: 200,
      },
      {
        label: "Total Amounts",
        field: "total_amounts",
        width: 200,
      },
      {
        label: "Status",
        field: "status",
        width: 200,
      },
      {
        label: "Operations",
        field: "operations",
        width: 100,
      },
    ],
    rows: [
      ...orderLists.map((value) => {
        return {
          customer_name: value.customer_name,
          customer_address: value.customer_address,
          date: Date.now(),
          total_products: value.total_products,
          total_amounts: value.total_amounts,
          status: show(value.paid_status),
          operations: (
            <>
              <MDBTooltip domElement placement="left">
                <Link to={`/attribute/${value._id}`} className="mr-2">
                  <span className="p-2 bg-default text-white">
                    <FaPrint />
                  </span>
                </Link>
                <div>Print Order</div>
              </MDBTooltip>

              <MDBTooltip domElement placement="right">
                <span
                  className="p-2 bg-primary text-white"
                  onClick={(e) => {
                    // setAttribute(value);
                    // handleUpdate();
                  }}
                >
                  <FaPen />
                </span>
                <div>Edit Order</div>
              </MDBTooltip>
            </>
          ),
        };
      }),
    ],
  };
  return (
    <>
      <div className="table-layout p-3 bg-white">
        <MDBDataTable
          sortable={false}
          entries={4}
          data={data}
          entriesOptions={[4, 7, 10]}
        />
      </div>
    </>
  );
};

export default OrderTable;
