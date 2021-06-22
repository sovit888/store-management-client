import React, { useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { getUser } from "../../../store/action";
import { connect } from "react-redux";

const UserTable = ({ users, loadUsers }) => {
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
        label: "Phone",
        field: "phone",
        width: 170,
      },
      {
        label: "Gender",
        field: "gender",
        width: 100,
      },
    ],

    rows: [
      ...users.lists.map((value) => {
        return {
          gender: value.gender,
          phone: value.phone,
          email: value.email,
          username: value.username,
          name: value.first_name + value.last_name,
        };
      }),
    ],
  };
  return (
    <>
      <div className="bg-white my-3 p-1 table-layout">
        <MDBDataTable
          data={data}
          sortable={false}
          entries={4}
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
