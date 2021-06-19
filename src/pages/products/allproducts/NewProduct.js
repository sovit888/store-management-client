import React from "react";
import { Breadcrumb, BreadcrumbItem, Button } from "reactstrap";
import {
  FormField,
  FileField,
  DescriptionField,
  SelectField,
  MultiSelect,
} from "./FormComponent";
import { attributes } from "./productData";

const NewProduct = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          Manage <small className="text-secondary">Products</small>
        </BreadcrumbItem>
      </Breadcrumb>
      <div className="bg-white p-2">
        <h4>Create a new Product</h4>
        <FileField />
        <FormField id={"product-name"} name={"name"} label={"Product Name"} />
        <FormField id={"product-sku"} name={"sku"} label={"SKU"} />
        <FormField
          id={"product-quantity"}
          name={"quantity"}
          label={"Quantity"}
        />
        <FormField id={"product-price"} name={"price"} label={"Price"} />
        <DescriptionField />
        {attributes.map((value, index) => {
          return (
            <MultiSelect
              options={value.values}
              key={index}
              label={value.labels}
            />
          );
        })}
        <SelectField
          id="product-brand"
          name={"brand"}
          label={"Brand"}
          options={["Adidas", "Puma", "Nike"]}
        />
        <SelectField
          id="product-category"
          name={"category"}
          label={"Category"}
          options={["Summer", "Winter", "Autumn"]}
        />
        <SelectField
          id="product-store"
          name={"store"}
          label={"Store"}
          options={["Store 1", "Store 2", "Store 3"]}
        />
        <Button className="custom-btn" color="primary">
          Create
        </Button>
      </div>
    </>
  );
};

export default NewProduct;
