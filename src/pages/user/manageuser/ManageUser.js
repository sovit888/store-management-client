import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import RemoveUser from "./RemoveUser";
import UpdateUser from "./UpdateUser";
import UserTable from "./UserTable";

const ManageUser = () => {
  const [user, setUser] = React.useState({});
  const [updateUserStatus, setUpdateUserStatus] = useState(false);
  const handleUpdate = () => setUpdateUserStatus(!updateUserStatus);

  const [removeUserStatus, setRemoveUserStatus] = useState(false);
  const handleRemove = () => setRemoveUserStatus(!removeUserStatus);

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>Manage User</BreadcrumbItem>
      </Breadcrumb>
      <UserTable
        updateUser={handleUpdate}
        setUser={setUser}
        removeUser={handleRemove}
      />
      <UpdateUser status={updateUserStatus} toggle={handleUpdate} user={user} />
      <RemoveUser user={user} status={removeUserStatus} toggle={handleRemove} />
    </>
  );
};

export default ManageUser;
