import React from "react";
import { Table } from "reactstrap";
import { FaWrench, FaTrashAlt } from "react-icons/fa";
import RemoveBrand from "./RemoveBrand";

const brandLists = [
  { name: "Adidas", status: true, id: 1 },
  { name: "Nike", status: false, id: 2 },
  { name: "Puma", status: false, id: 3 },
  { name: "Vans", status: true, id: 4 },
];

const BrandTable = ({ setBrand, toggle, brand }) => {
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
            {brandLists.map((value, index) => {
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
                        setBrand(value);
                        toggle(e);
                      }}
                    >
                      <FaWrench />
                    </span>

                    <span className="mx-1"></span>
                    <span
                      className="p-2 text-white bg-danger"
                      onClick={(e) => {
                        setBrand(value);
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
      <RemoveBrand status={removeStatus} toggle={handleToggle} brand={brand} />
    </>
  );
};

export default BrandTable;
