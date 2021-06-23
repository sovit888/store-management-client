import React, { useEffect } from "react";
import { MDBDataTable, MDBTooltip } from "mdbreact";
import { FaTrashAlt, FaPen, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAttribute } from "../../../store/action";

const AttributeTable = ({
  setAttribute,
  handleUpdate,
  handleRemove,
  attributes,
  loadAttributes,
}) => {
  useEffect(() => {
    loadAttributes();
  }, [loadAttributes]);
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
      ...attributes.lists.map((value) => {
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

const mapStateToProps = (state) => {
  return { attributes: state.attributes };
};
const mapDispatchToProps = (dispatch) => {
  return { loadAttributes: () => dispatch(getAttribute()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(AttributeTable);
