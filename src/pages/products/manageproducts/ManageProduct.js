import React, { useState } from "react";
import ProductTable from "./ProductTable";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import RemoveProduct from "./RemoveProduct";

const ManageProduct = () => {
  const [product, setProduct] = useState({});
  const [removeStatus, setRemoveStatus] = useState(false);
  const handleRemove = () => setRemoveStatus(!removeStatus);
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>Manage Products</BreadcrumbItem>
      </Breadcrumb>
      <ProductTable setProduct={setProduct} toggle={handleRemove} />
      <RemoveProduct
        status={removeStatus}
        toggle={handleRemove}
        product={product}
      />
    </>
  );
};

export default ManageProduct;
