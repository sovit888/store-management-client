import React, { useEffect } from "react";
import { MDBDataTable, MDBTooltip } from "mdbreact";
import { FaWrench, FaTrashAlt } from "react-icons/fa";
import { connect } from "react-redux";
import { getStore } from "../../store/action";

const StoreTable = ({
  setStore,
  handleManage,
  handleRemove,
  stores,
  loadCategory,
}) => {
  useEffect(() => {
    loadCategory();
  }, [loadCategory]);
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
      ...stores.lists.map((value, index) => {
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
                    handleManage();
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
                    handleRemove();
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
    </>
  );
};

const mapStateToProps = (state) => {
  return { stores: state.stores };
};
const mapDispatchToProps = (dispatch) => {
  return { loadCategory: () => dispatch(getStore()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreTable);
