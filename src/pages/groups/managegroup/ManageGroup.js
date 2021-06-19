import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import GroupTable from "./GroupTable";
import RemoveGroup from "./RemoveGroup";

const ManageGroup = () => {
  const [group, setGroup] = React.useState({});
  const [removeGroup, setRemoveGroup] = useState(false);
  const handleRemove = () => setRemoveGroup(!removeGroup);
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>Manage Groups</BreadcrumbItem>
      </Breadcrumb>
      <GroupTable toggle={handleRemove} setGroup={setGroup} />
      <RemoveGroup group={group} status={removeGroup} toggle={handleRemove} />
    </>
  );
};

export default ManageGroup;
