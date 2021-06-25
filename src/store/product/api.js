import authAxios from "../../utils/authAxios";

export const getProductApi = () => {
  return authAxios
    .get("/product")
    .then((result) => {
      return { data: result.data };
    })
    .catch((error) => {
      return { error: "cannot get products" };
    });
};

export const createProductApi = (payload) => {
  return authAxios
    .post("/product", payload)
    .then((result) => {
      return { data: result.data };
    })
    .catch((error) => {
      return { error: "cannot insert products" };
    });
};

export const updateProductApi = ({ data, id }) => {
  return authAxios
    .put(`/product/${id}`, data)
    .then((result) => {
      return { data: result.data };
    })
    .catch((error) => {
      return { error: "cannot update products" };
    });
};

export const deleteProductApi = (productId) => {
  return authAxios
    .delete(`/product/${productId}`)
    .then((result) => {
      return { data: result.data };
    })
    .catch((error) => {
      return { error: "cannot delete products" };
    });
};
