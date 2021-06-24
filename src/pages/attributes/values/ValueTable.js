import React from "react";
import { MDBDataTable, MDBTooltip } from "mdbreact";
import { FaWrench, FaTrashAlt } from "react-icons/fa";

const ValueTable = ({
  handleRemove,
  setValue,
  handleUpdate,
  attributeValues,
}) => {
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
      ...attributeValues.map((value) => {
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
                    setValue(value);
                    handleUpdate();
                  }}
                >
                  <FaWrench />
                </span>
                <div>Edit Values</div>
              </MDBTooltip>

              <span className="mx-1"></span>
              <MDBTooltip domElement placement="right">
                <span
                  className="p-2 text-white bg-danger"
                  onClick={(e) => {
                    setValue(value);
                    handleRemove();
                  }}
                >
                  <FaTrashAlt />
                </span>
                <div>Delete Vales</div>
              </MDBTooltip>
            </>
          ),
        };
      }),
    ],
  };
  return (
    <>
      <div className="bg-white table-layout p-2">
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

export default ValueTable;
