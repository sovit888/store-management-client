import React from "react";
import { MDBDataTable, MDBTooltip } from "mdbreact";
import { FaTrashAlt, FaPen } from "react-icons/fa";

const userLists = [
  {
    username: "Sovitco",
    email: "Sovitthapa008@gmail.com",
    phone: "9826184961",
    gender: "Male",
    name: "Sovit Thapa",
  },
  {
    username: "Sovitco",
    email: "Sovitthapa008@gmail.com",
    phone: "9826184961",
    gender: "Male",
    name: "Sovit Thapa",
  },
  {
    username: "Sovitco",
    email: "Sovitthapa008@gmail.com",
    phone: "9826184961",
    gender: "Male",
    name: "Sovit Thapa",
  },
];

const UserTable = () => {
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
        label: "Operations",
        field: "operation",
        width: 200,
      },
    ],
    rows: [
      ...userLists.map((value) => {
        return {
          email: value.email,
          name: value.name,
          username: value.username,
          operation: (
            <>
              <MDBTooltip placement="left" domElement>
                <span
                  className="p-2 bg-primary text-white"
                  onClick={(e) => {
                    // setCategory(value);
                    // toggle(e);
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
                    // setCategory(value);
                    // handleToggle();
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

export default UserTable;
