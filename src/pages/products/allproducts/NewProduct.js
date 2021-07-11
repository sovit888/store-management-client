import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  Label,
  FormGroup,
  Input,
} from "reactstrap";
import {
  FormField,
  FileField,
  DescriptionField,
  SelectField,
  MultiSelect,
} from "./FormComponent";
import { GET_DETAILS } from "./query";
import { useQuery } from "@apollo/client";
import { useFormik } from "formik";
import productValidation from "./productValidation";
import { createProduct } from "../../../store/action";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const NewProduct = ({ newProduct }) => {
  const history = useHistory();
  const { data, refetch } = useQuery(GET_DETAILS);
  const [stores, setStores] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [image, setImage] = useState(null);
  const [attribute, setAttribute] = useState({});
  const [productAttribute, setProductAttribute] = useState({});
  useEffect(() => {
    if (data) {
      setBrands(data.brands);
      setCategorys(data.categorys);
      setStores(data.stores);
      setAttribute(
        data.attributes.reduce((initial, final) => {
          initial[final.attribute.name] = [
            ...(initial[final.attribute.name] || []),
            final.name,
          ];
          return initial;
        }, {})
      );
      setProductAttribute(
        data.attributes.reduce((initial, final) => {
          initial[final.attribute.name] = [];
          return initial;
        }, {})
      );
    }
  }, [data]);
  useEffect(() => {
    refetch();
  }, [refetch]);
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      description: "",
      store: "",
      brand: "",
      category: "",
      availability: false,
    },
    validationSchema: productValidation,
    onSubmit: (values) => {
      const formData = new FormData();
      for (let x in values) {
        formData.append(x, values[x]);
      }
      formData.append("image", image);
      formData.append("attribute", JSON.stringify(productAttribute));
      newProduct(formData);
      history.push("/product/all");
    },
  });

  const handleProductAttribute = (type) => (e) => {
    setProductAttribute({ ...productAttribute, [type]: e });
  };
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          Manage <small className="text-secondary">Products</small>
        </BreadcrumbItem>
      </Breadcrumb>
      <div className="bg-white p-2">
        <h4>Create a new Product</h4>
        <Form onSubmit={formik.handleSubmit}>
          <FileField setImage={setImage} />
          <FormField
            id={"product-name"}
            name={"name"}
            label={"Product Name"}
            formik={formik}
          />
          <FormField
            id={"product-price"}
            name={"price"}
            label={"Price"}
            formik={formik}
          />
          <DescriptionField formik={formik} />
          {Object.entries(attribute).map(([key, value], index) => {
            return (
              <MultiSelect
                options={value}
                key={index}
                label={key}
                handleProductAttribute={handleProductAttribute}
              />
            );
          })}
          <SelectField
            id="product-brand"
            name={"brand"}
            label={"Brand"}
            options={brands}
            formik={formik}
          />
          <SelectField
            id="product-category"
            name={"category"}
            label={"Category"}
            options={categorys}
            formik={formik}
          />
          <SelectField
            id="product-store"
            name={"store"}
            label={"Store"}
            options={stores}
            formik={formik}
          />
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="availability"
                checked={formik.values.availability}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              Availabilty
            </Label>
          </FormGroup>
          <Button className="custom-btn" color="primary" type="submit">
            Create
          </Button>
        </Form>
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    newProduct: (payload) => dispatch(createProduct(payload)),
  };
};
export default connect(null, mapDispatchToProps)(NewProduct);
