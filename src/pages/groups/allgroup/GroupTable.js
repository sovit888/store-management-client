import React, { useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { connect } from "react-redux";
import { getGroup } from "../../../store/action";

const show = (status) => {
  return status ? (
    <span className="bg-success p-1 text-white rounded-border">Active</span>
  ) : (
    <span className="bg-warning p-1 rounded-border">Inactive</span>
  );
};

const GroupTable = ({ groups, loadGroups }) => {
  useEffect(() => {
    loadGroups();
  }, [loadGroups]);
  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        width: 230,
      },
      {
        label: "Stores",
        field: "stores",
        width: 200,
      },
      {
        label: "Categorys",
        field: "categorys",
        width: 200,
      },
      {
        label: "Brands",
        field: "brands",
        width: 170,
      },
      {
        label: "Products",
        field: "products",
        width: 100,
      },
      {
        label: "Attributes",
        field: "attributes",
        width: 100,
      },
    ],
    rows: [
      ...groups.lists.map((value) => {
        return {
          name: value.name,
          products: show(value.products),
          categorys: show(value.categorys),
          brands: show(value.brands),
          stores: show(value.stores),
          attributes: show(value.attributes),
        };
      }),
    ],
  };
  return (
    <>
      <div className="bg-white p-2 table-layout">
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

const mapStateToProps = (state) => {
  return { groups: state.groups };
};
const mapDispatchToProps = (dispatch) => {
  return { loadGroups: () => dispatch(getGroup()) };
};
export default connect(mapStateToProps, mapDispatchToProps)(GroupTable);
