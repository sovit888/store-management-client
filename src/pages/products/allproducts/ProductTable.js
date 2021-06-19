import React from "react";
import { MDBDataTable } from "mdbreact";

const productLists = [];

const ProductTable = () => {
  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        width: 230,
      },
      {
        label: "Stores",
        field: "stores",
        width: 200,
      },
      {
        label: "Categorys",
        field: "categorys",
        width: 200,
      },
      {
        label: "Brands",
        field: "brands",
        width: 170,
      },
      {
        label: "Products",
        field: "products",
        width: 100,
      },
      {
        label: "Attributes",
        field: "attributes",
        width: 100,
      },
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
