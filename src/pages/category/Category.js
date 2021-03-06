import React from "react";
import { Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import CreateCategory from "./CreateCategory";
import ManageCategory from "./ManageCategory";
import "./category.css";
import CategoryTable from "./CategoryTable";
import RemoveCategory from "./RemoveCategory";

const Category = () => {
  const [category, setCategory] = React.useState({});
  const [createCategory, setCreateCategory] = React.useState(false);
  const handleCreateStatus = (e) => setCreateCategory(!createCategory);

  const [manageCategory, setManageCategory] = React.useState(false);
  const handleManageStatus = (e) => setManageCategory(!manageCategory);

  const [removeStatus, setRemoveStatus] = React.useState(false);
  const handleRemoveStatus = () => setRemoveStatus(!removeStatus);

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          Manage <small className="text-secondary">Category</small>
        </BreadcrumbItem>
      </Breadcrumb>
      <Button
        className="custom-btn custom-btn-primary"
        onClick={handleCreateStatus}
      >
        Add Category
      </Button>
      <CreateCategory toggle={handleCreateStatus} status={createCategory} />
      <CategoryTable
        setCategory={setCategory}
        handleManage={handleManageStatus}
        handleRemove={handleRemoveStatus}
      />
      <ManageCategory
        toggle={handleManageStatus}
        status={manageCategory}
        category={category}
      />
      <RemoveCategory
        status={removeStatus}
        toggle={handleRemoveStatus}
        category={category}
      />
    </>
  );
};

export default Category;
