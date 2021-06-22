import React, { useEffect } from "react";
import { MDBDataTable, MDBTooltip } from "mdbreact";
import { FaWrench, FaTrashAlt } from "react-icons/fa";
import { connect } from "react-redux";
import { getCategory } from "../../store/action";

const CategoryTable = ({
  setCategory,
  handleManage,
  handleRemove,
  categorys,
  loadCategorys,
}) => {
  useEffect(() => {
    loadCategorys();
  }, [loadCategorys]);
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
      ...categorys.lists.map((value) => {
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
                    handleManage();
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
                    handleRemove();
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
    </>
  );
};
const mapStateToProps = (state) => {
  return { categorys: state.categorys };
};
const mapDispatchToProps = (dispatch) => {
  return { loadCategorys: () => dispatch(getCategory()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryTable);
