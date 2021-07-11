import axios from "axios";

export const getOrderApi = () => {
  return axios
    .get("http://localhost:2000/api/order", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((result) => {
      return { data: result.data };
    })
    .catch((error) => {
      return { error: "cannot get orders" };
    });
};

export const createOrderApi = (payload) => {
  return axios
    .post("http://localhost:2000/api/order", payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((result) => {
      return { data: result.data };
    })
    .catch((error) => {
      return { error: "cannot get orders" };
    });
};

export const updateOrderApi = ({ data, id }) => {
  return axios
    .put(`http://localhost:2000/api/order/${id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((result) => {
      return { data: result.data };
    })
    .catch((error) => {
      return { error: "cannot get orders" };
    });
};

export const deleteOrderApi = (id) => {
  return axios
    .delete(`http://localhost:2000/api/order/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((result) => {
      return { data: result.data };
    })
    .catch((error) => {
      return { error: "cannot get orders" };
    });
};
