import React from "react";
import { Table } from "reactstrap";
import { FaWrench, FaTrashAlt } from "react-icons/fa";
import RemoveCategory from "./RemoveCategory";

const storeLists = [
  { name: "store 1", status: false, id: 1 },
  { name: "store 2", status: true, id: 2 },
  { name: "store 3", status: true, id: 3 },
  { name: "store 4", status: false, id: 4 },
];

const CategoryTable = ({ setCategory, toggle, category }) => {
  const [removeStatus, setRemoveStatus] = React.useState(false);
  const handleToggle = () => setRemoveStatus(!removeStatus);
  return (
    <>
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
                    <span
                      className="p-2 bg-primary text-white"
                      onClick={(e) => {
                        setCategory(value);
                        toggle(e);
                      }}
                    >
                      <FaWrench />
                    </span>

                    <span className="mx-1"></span>
                    <span
                      className="p-2 text-white bg-danger"
                      onClick={(e) => {
                        setCategory(value);
                        handleToggle();
                      }}
                    >
                      <FaTrashAlt />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <RemoveCategory
        status={removeStatus}
        toggle={handleToggle}
        category={category}
      />
    </>
  );
};

export default CategoryTable;
