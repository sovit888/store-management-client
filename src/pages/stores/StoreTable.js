import React from "react";
import { Table } from "reactstrap";
import { FaWrench, FaTrashAlt } from "react-icons/fa";

const storeLists = [
  { name: "store 1", status: false },
  { name: "store 2", status: true },
  { name: "store 3", status: true },
  { name: "store 4", status: false },
];

const StoreTable = () => {
  return (
    <div className="bg-white my-3 p-1 table-layout">
      <Table className="custom-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Status</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {storeLists.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>
                  {value.status ? (
                    <span className="bg-primary p-1 text-white">Active</span>
                  ) : (
                    <span className="bg-danger p-1 text-white">Inactive</span>
                  )}
                </td>
                <td>
                  <span className="p-2 bg-primary text-white">
                    <FaWrench />
                  </span>

                  <span className="mx-1"></span>
                  <span className="p-2 text-white bg-danger">
                    <FaTrashAlt />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default StoreTable;
