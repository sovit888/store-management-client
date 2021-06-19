import React from "react";
import { MDBDataTable } from "mdbreact";

const productLists = [
  {
    price: 200,
    quantity: 20,
    sku: "blue-shirt small",
    store: "Krishna Grocery",
    image: "",
  },
];
const show = (status) => {
  return status ? (
    <span className="bg-success p-1 text-white rounded-border">Yes</span>
  ) : (
    <span className="bg-warning p-1 rounded-border">No</span>
  );
};

const ProductTable = () => {
  const data = {
    columns: [
      {
        label: "Image",
        field: "image",
        width: 230,
      },
      {
        label: "SKU",
        field: "sku",
        width: 200,
      },
      {
        label: "Store",
        field: "store",
        width: 100,
      },
      {
        label: "Quantity",
        field: "quantity",
        width: 200,
      },
      {
        label: "Availability",
        field: "availability",
        width: 170,
      },
    ],
    rows: [
      ...productLists.map((value) => {
        return {
          image: (
            <img src={value.image} alt="Products" width={20} height={20} />
          ),
          sku: value.sku,
          store: value.store,
          quantity: value.quantity,
          availability: show(value.quantity > 0),
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

export default ProductTable;
