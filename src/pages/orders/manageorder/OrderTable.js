import React, { useEffect } from "react";
import { MDBDataTable, MDBTooltip } from "mdbreact";
import { FaPrint, FaPen, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getOrder } from "../../../store/action";
const show = (status) => {
  return status ? (
    <span className="bg-success p-1 text-white rounded-border">Paid</span>
  ) : (
    <span className="bg-warning p-1 rounded-border">Unpaid</span>
  );
};

const OrderTable = ({
  orders,
  loadOrder,
  setOrder,
  handleUpdate,
  handleRemove,
}) => {
  useEffect(() => {
    loadOrder();
  }, [loadOrder]);
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
        label: "Products",
        field: "name",
        width: 200,
      },
      {
        label: "Total",
        field: "total",
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
      ...orders.lists.map((value) => {
        return {
          customer_name: value.customer_name,
          customer_address: value.customer_address,
          name: value.product.name,
          total: value.total,
          status: show(value.status),
          operations: (
            <>
              <MDBTooltip domElement placement="left">
                <Link to={`/order/${value._id}`} className="mr-2">
                  <span className="p-2 bg-default text-white">
                    <FaPrint />
                  </span>
                </Link>
                <div>Print Order</div>
              </MDBTooltip>

              <MDBTooltip domElement placement="top">
                <span
                  className="p-2 bg-primary text-white"
                  onClick={(e) => {
                    setOrder(value);
                    handleUpdate();
                  }}
                >
                  <FaPen />
                </span>
                <div>Edit Order</div>
              </MDBTooltip>
              <MDBTooltip domElement placement="right">
                <span
                  className="p-2 bg-danger text-white ml-2"
                  onClick={(e) => {
                    setOrder(value);
                    handleRemove();
                  }}
                >
                  <FaTrashAlt />
                </span>
                <div>Delete Order</div>
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
const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadOrder: () => dispatch(getOrder()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderTable);
