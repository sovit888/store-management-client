import React from "react";
import { MDBDataTable } from "mdbreact";
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
    rows: userLists,
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

export default UserTable;
