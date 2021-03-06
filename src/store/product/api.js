import axios from "axios";

export const getProductApi = () => {
  return axios
    .get("http://localhost:2000/api/product", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((result) => {
      return { data: result.data };
    })
    .catch((error) => {
      return { error: "cannot get products" };
    });
};

export const createProductApi = (payload) => {
  return axios
    .post("http://localhost:2000/api/product", payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((result) => {
      return { data: result.data };
    })
    .catch((error) => {
      return { error: "cannot insert products" };
    });
};

export const updateProductApi = ({ data, id }) => {
  return axios
    .put(`http://localhost:2000/api/product/${id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((result) => {
      return { data: result.data };
    })
    .catch((error) => {
      return { error: "cannot update products" };
    });
};

export const deleteProductApi = (productId) => {
  return axios
    .delete(`http://localhost:2000/api/product/${productId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((result) => {
      return { data: result.data };
    })
    .catch((error) => {
      return { error: "cannot delete products" };
    });
};
