import React from "react";
import { MDBDataTable, MDBTooltip } from "mdbreact";
import { FaTrashAlt, FaPen } from "react-icons/fa";
const attributeLists = [
  { name: "Size", status: false, id: 1 },
  { name: "Colour", status: true, id: 2 },
  { name: "Shape", status: true, id: 3 },
  { name: "Type", status: false, id: 4 },
];

const AttributeTable = () => {
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
                <span
                  className="p-2 bg-primary text-white"
                  onClick={(e) => {
                    //   setStore(value);
                    //   toggle(e);
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
                    //   setStore(value);
                    //   handleToggle();
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
