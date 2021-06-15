import React from "react";
import { MDBDataTable, MDBTooltip } from "mdbreact";
import { FaWrench, FaTrashAlt } from "react-icons/fa";
import RemoveStore from "./RemoveStore";

const storeLists = [
  { name: "store 1", status: false, id: 1 },
  { name: "store 2", status: true, id: 2 },
  { name: "store 3", status: true, id: 3 },
  { name: "store 4", status: false, id: 4 },
];

const StoreTable = ({ setStore, toggle, store }) => {
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
      ...storeLists.map((value, index) => {
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
                    setStore(value);
                    toggle(e);
                  }}
                >
                  <FaWrench />
                </span>
                <div>Edit Store</div>
              </MDBTooltip>

              <span className="mx-1"></span>
              <MDBTooltip placement="right" domElement>
                <span
                  className="p-2 text-white bg-danger"
                  onClick={(e) => {
                    setStore(value);
                    handleToggle();
                  }}
                >
                  <FaTrashAlt />
                </span>
                <div>Delete Store</div>
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
      <RemoveStore status={removeStatus} toggle={handleToggle} store={store} />
    </>
  );
};

export default StoreTable;
