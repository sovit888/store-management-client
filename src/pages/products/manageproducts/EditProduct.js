import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import productValidation from "../allproducts/productValidation";
import { connect } from "react-redux";
import { updateProduct } from "../../../store/action";
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
} from "../allproducts/FormComponent";
import { GET_DETAILS } from "../allproducts/query";
import { useQuery } from "@apollo/client";
import axios from "axios";

const EditProduct = ({ editProduct }) => {
  const { id } = useParams();
  const { data, refetch } = useQuery(GET_DETAILS);
  const [stores, setStores] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [image, setImage] = useState(null);
  const [product, setProduct] = useState({});
  const [attribute, setAttribute] = useState({});
  const [productAttribute, setProductAttribute] = useState({});
  const history = useHistory();
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
    axios
      .get(`http://localhost:2000/api/product/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((result) => {
        setProduct(result.data.product);
      })
      .catch((error) => {
        history.push("/product/manage");
      });
  }, [history, id]);
  useEffect(() => {
    refetch();
  }, [refetch]);

  const formik = useFormik({
    initialValues: {
      name: product.name || "",
      price: product.price || "",
      description: product.description || "",
      store: product.store || "",
      brand: product.brand || "",
      category: product.category || "",
      availability: product.availability || false,
    },
    enableReinitialize: true,
    validationSchema: productValidation,
    onSubmit: (values) => {
      const formData = new FormData();
      for (let x in values) {
        formData.append(x, values[x]);
      }
      if (image != null) {
        formData.append("image", image);
      }

      formData.append("attribute", JSON.stringify(productAttribute));
      editProduct({ data: formData, id: id });
      history.push("/product/manage");
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
                defaultValue={JSON.parse(product.attribute || '""')[key] || []}
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
            Update
          </Button>
        </Form>
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    editProduct: (payload) => dispatch(updateProduct(payload)),
  };
};
export default connect(null, mapDispatchToProps)(EditProduct);
