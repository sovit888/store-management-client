import React from "react";
import { MDBDataTable } from "mdbreact";

const groupLists = [
  {
    name: "Staff",
    products: true,
    categorys: false,
    stores: true,
    attributes: true,
    brands: true,
  },
];

const show = (status) => {
  return status ? (
    <span className="bg-success p-1 text-white rounded-border">Active</span>
  ) : (
    <span className="bg-warning p-1 rounded-border">Inactive</span>
  );
};

const GroupTable = () => {
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
    rows: [
      ...groupLists.map((value) => {
        return {
          name: value.name,
          products: show(value.products),
          categorys: show(value.categorys),
          brands: show(value.brands),
          stores: show(value.stores),
          attributes: show(value.attributes),
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

export default GroupTable;
