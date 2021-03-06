import React, { useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { getProduct } from "../../../store/action";
import { connect } from "react-redux";

const show = (status) => {
  return status ? (
    <span className="bg-success p-1 text-white rounded-border">Yes</span>
  ) : (
    <span className="bg-warning p-1 rounded-border">No</span>
  );
};

const ProductTable = ({ products, loadProducts }) => {
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);
  const data = {
    columns: [
      {
        label: "Image",
        field: "image",
        width: 230,
      },
      {
        label: "product Name",
        field: "name",
        width: 200,
      },
      {
        label: "Store",
        field: "store",
        width: 100,
      },
      {
        label: "Brand",
        field: "brand",
        width: 200,
      },
      {
        label: "Category",
        field: "category",
        width: 200,
      },
      { label: "Price", field: "price", width: 200 },
      {
        label: "Availability",
        field: "availability",
        width: 170,
      },
    ],
    rows: [
      ...products.lists.map((value) => {
        return {
          image: (
            <img
              src={
                value.image != null
                  ? `http://localhost:2000/static/${value.image}`
                  : null
              }
              alt="Products"
              width={40}
              height={20}
            />
          ),
          name: value.name,
          brand: value.brand,
          category: value.category,
          store: value.store,
          price: <span className="font-weight-bold"> Rs {value.price} </span>,
          availability: show(value.availability),
        };
      }),
    ],
  };
  return (
    <>
      <div className="bg-white p-2 table-layout">
        <MDBDataTable
          sortable={false}
          entries={4}
          entriesOptions={[4, 7, 10]}
          data={data}
        />
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadProducts: () => dispatch(getProduct()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductTable);
