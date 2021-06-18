import React from "react";
import { MDBDataTable, MDBTooltip } from "mdbreact";
import { FaWrench, FaTrashAlt } from "react-icons/fa";
import RemoveBrand from "./RemoveBrand";

const brandLists = [
  { name: "Adidas", status: true, id: 1 },
  { name: "Nike", status: false, id: 2 },
  { name: "Puma", status: false, id: 3 },
  { name: "Vans", status: true, id: 4 },
];

const BrandTable = ({ setBrand, toggle, brand }) => {
  const [removeStatus, setRemoveStatus] = React.useState(false);
  const handleToggle = () => setRemoveStatus(!removeStatus);

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
      ...brandLists.map((value, index) => {
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
                    setBrand(value);
                    toggle(e);
                  }}
                >
                  <FaWrench />
                </span>
                <div>Edit Brand</div>
              </MDBTooltip>

              <span className="mx-1"></span>
              <MDBTooltip domElement placement="right">
                <span
                  className="p-2 text-white bg-danger"
                  onClick={(e) => {
                    setBrand(value);
                    handleToggle();
                  }}
                >
                  <FaTrashAlt />
                </span>
                <div>Delete Brand</div>
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
          sortable={false}
          data={data}
          entries={4}
          entriesOptions={[4, 7, 10]}
        />
      </div>
      <RemoveBrand status={removeStatus} toggle={handleToggle} brand={brand} />
    </>
  );
};

export default BrandTable;