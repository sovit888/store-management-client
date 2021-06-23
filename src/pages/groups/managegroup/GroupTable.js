import React, { useEffect } from "react";
import { MDBDataTable, MDBTooltip } from "mdbreact";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getGroup } from "../../../store/action";

const show = (status) => {
  return status ? (
    <span className="bg-success p-1 text-white rounded-border">Active</span>
  ) : (
    <span className="bg-warning p-1 rounded-border">Inactive</span>
  );
};

const GroupTable = ({ toggle, setGroup, loadGroups, groups }) => {
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
      {
        label: "Orders",
        field: "orders",
        width: 100,
      },
      {
        label: "Operations",
        field: "operations",
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
          orders: show(value.orders),
          operations: (
            <>
              <MDBTooltip placement="left" domElement>
                <Link to={`/group/${value._id}`}>
                  <span className="p-2 bg-primary text-white">
                    <FaPen />
                  </span>
                </Link>
                <div>Edit Group</div>
              </MDBTooltip>

              <span className="mx-1"></span>
              <MDBTooltip placement="right" domElement>
                <span
                  className="p-2 text-white bg-danger"
                  onClick={(e) => {
                    setGroup(value);
                    toggle();
                  }}
                >
                  <FaTrashAlt />
                </span>
                <div>Delete Group</div>
              </MDBTooltip>
            </>
          ),
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
