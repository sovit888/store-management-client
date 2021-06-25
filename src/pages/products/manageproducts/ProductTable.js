import React, { useEffect } from "react";
import { MDBDataTable, MDBTooltip } from "mdbreact";
import { getProduct } from "../../../store/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FaPen, FaTrashAlt } from "react-icons/fa";

const ProductTable = ({ products, loadProducts, setProduct, toggle }) => {
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
        label: "Operations",
        field: "operations",
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
          operations: (
            <>
              <MDBTooltip placement="left" domElement>
                <Link to={`/product/${value._id}`}>
                  <span className="p-2 bg-primary text-white">
                    <FaPen />
                  </span>
                </Link>
                <div>Edit Product</div>
              </MDBTooltip>

              <span className="mx-1"></span>
              <MDBTooltip placement="right" domElement>
                <span
                  className="p-2 text-white bg-danger"
                  onClick={(e) => {
                    setProduct(value);
                    toggle();
                  }}
                >
                  <FaTrashAlt />
                </span>
                <div>Delete Product</div>
              </MDBTooltip>
            </>
          ),
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
