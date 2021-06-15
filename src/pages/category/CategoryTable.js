import React from "react";
import { MDBDataTable, MDBTooltip } from "mdbreact";
import { FaWrench, FaTrashAlt } from "react-icons/fa";
import RemoveCategory from "./RemoveCategory";

const categoryLists = [
  { name: "Winter", status: false, id: 1 },
  { name: "Summer", status: true, id: 2 },
  { name: "Spring", status: true, id: 3 },
  { name: "Bikni", status: false, id: 4 },
];

const CategoryTable = ({ setCategory, toggle, category }) => {
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
      ...categoryLists.map((value, index) => {
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
              <MDBTooltip placement="left" domElement>
                <span
                  className="p-2 bg-primary text-white"
                  onClick={(e) => {
                    setCategory(value);
                    toggle(e);
                  }}
                >
                  <FaWrench />
                </span>
                <div>Edit Category</div>
              </MDBTooltip>

              <span className="mx-1"></span>
              <MDBTooltip placement="right" domElement>
                <span
                  className="p-2 text-white bg-danger"
                  onClick={(e) => {
                    setCategory(value);
                    handleToggle();
                  }}
                >
                  <FaTrashAlt />
                </span>
                <div>Delete Category</div>
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
          entries={4}
          entriesOptions={[4, 7, 10]}
          data={data}
          sortable={false}
        />
      </div>
      <RemoveCategory
        status={removeStatus}
        toggle={handleToggle}
        category={category}
      />
    </>
  );
};

export default CategoryTable;
