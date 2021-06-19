import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import ProductTable from "./ProductTable";

const AllProduct = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>All Products</BreadcrumbItem>
      </Breadcrumb>
      <Link
        to={"/group/new"}
        className="custom-btn btn  text-white custom-btn-primary mb-3"
      >
        Add New Products
      </Link>
      <ProductTable />
    </>
  );
};

export default AllProduct;
