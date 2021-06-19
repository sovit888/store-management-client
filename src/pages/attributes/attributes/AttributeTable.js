import React from "react";
import { MDBDataTable, MDBTooltip } from "mdbreact";
import { FaTrashAlt, FaPen, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const attributeLists = [
  { name: "Size", status: false, _id: 1 },
  { name: "Colour", status: true, _id: 2 },
  { name: "Shape", status: true, _id: 3 },
];

const AttributeTable = ({ setAttribute, handleUpdate, handleRemove }) => {
  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        width: 270,
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
      ...attributeLists.map((value, index) => {
        return {
          name: value.name,
          status: value.status ? (
            <span className="bg-success p-1 text-white rounded-border">
              Active
            </span>
          ) : (
            <span className="bg-warning p-1 rounded-border">Inactive</span>
          ),
          operations: (
            <>
              <MDBTooltip domElement placement="left">
                <Link to={`/attribute/${value._id}`} className="mr-2">
                  <span className="p-2 bg-default text-white">
                    <FaPlus />
                  </span>
                </Link>
                <div>Add Values</div>
              </MDBTooltip>

              <MDBTooltip domElement placement="top">
                <span
                  className="p-2 bg-primary text-white"
                  onClick={(e) => {
                    setAttribute(value);
                    handleUpdate();
                  }}
                >
                  <FaPen />
                </span>
                <div>Edit Attribute</div>
              </MDBTooltip>

              <span className="mx-1"></span>
              <MDBTooltip placement="right" domElement>
                <span
                  className="p-2 text-white bg-danger"
                  onClick={(e) => {
                    setAttribute(value);
                    handleRemove();
                  }}
                >
                  <FaTrashAlt />
                </span>
                <div>Delete Attributes</div>
              </MDBTooltip>
            </>
          ),
        };
      }),
    ],
  };
  return (
    <>
      <div className="bg-white my-3 p-1 table-layout">
        <MDBDataTable
          searching={true}
          sortable={false}
          data={data}
          entriesOptions={[4, 7, 10]}
          entries={4}
        />
      </div>
    </>
  );
};

export default AttributeTable;
