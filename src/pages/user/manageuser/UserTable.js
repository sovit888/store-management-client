import React, { useEffect } from "react";
import { MDBDataTable, MDBTooltip } from "mdbreact";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { getUser } from "../../../store/action";
import { connect } from "react-redux";

const UserTable = ({ updateUser, removeUser, setUser, users, loadUsers }) => {
  useEffect(() => {
    loadUsers();
  }, [loadUsers]);
  const data = {
    columns: [
      {
        label: "Email",
        field: "email",
        width: 230,
      },
      {
        label: "Full Name",
        field: "name",
        width: 200,
      },
      {
        label: "Username",
        field: "username",
        width: 200,
      },
      {
        label: "Groups",
        field: "group",
        width: 200,
      },
      {
        label: "Operations",
        field: "operation",
        width: 200,
      },
    ],
    rows: [
      ...users.lists.map((value) => {
        return {
          email: value.email,
          name: value.first_name + value.last_name,
          username: value.username,
          group: value.group.name,
          operation: (
            <>
              <MDBTooltip placement="left" domElement>
                <span
                  className="p-2 bg-primary text-white"
                  onClick={(e) => {
                    updateUser();
                    setUser(value);
                  }}
                >
                  <FaPen />
                </span>
                <div>Edit User</div>
              </MDBTooltip>

              <span className="mx-1"></span>
              <MDBTooltip placement="right" domElement>
                <span
                  className="p-2 text-white bg-danger"
                  onClick={(e) => {
                    setUser(value);
                    removeUser();
                  }}
                >
                  <FaTrashAlt />
                </span>
                <div>Delete User</div>
              </MDBTooltip>
            </>
          ),
        };
      }),
    ],
  };
  return (
    <>
      <div className="bg-white p-1 table-layout">
        <MDBDataTable
          sortable={false}
          entries={4}
          data={data}
          entriesOptions={[4, 7, 10]}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { users: state.users };
};
const mapDispatchToProps = (dispatch) => {
  return { loadUsers: () => dispatch(getUser()) };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
