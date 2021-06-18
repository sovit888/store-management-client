import React from "react";
import { MDBDataTable } from "mdbreact";

const GroupTable = () => {
  return (
    <>
      <div className="bg-white p-2 table-layout">
        <MDBDataTable sortable={false} />
      </div>
    </>
  );
};

export default GroupTable;
