import React, { useEffect } from "react";
import { MDBDataTable, MDBTooltip } from "mdbreact";
import { FaWrench, FaTrashAlt } from "react-icons/fa";
import { connect } from "react-redux";
import { getBrand } from "../../store/action";

const BrandTable = ({
  setBrand,
  handleManage,
  handleRemove,
  brands,
  loadBrands,
}) => {
  useEffect(() => {
    loadBrands();
  }, [loadBrands]);

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
      ...brands.lists.map((value) => {
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
                    handleManage();
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
                    handleRemove();
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
    </>
  );
};

const mapStateToProps = (state) => {
  return { brands: state.brands };
};
const mapDispatchToProps = (dispatch) => {
  return { loadBrands: () => dispatch(getBrand()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(BrandTable);
