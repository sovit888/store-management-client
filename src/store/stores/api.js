import axios from "axios";

export const getStoreApi = () => {
  return axios
    .get("http://localhost:2000/api/store", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};

export const createStoreApi = (store) => {
  return axios
    .post("http://localhost:2000/api/store", store, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};

export const updateStoreApi = (store) => {
  return axios
    .put("http://localhost:2000/api/store", store, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};

export const deleteStoreApi = (storeId) => {
  return axios
    .delete(`http://localhost:2000/api/store/${storeId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};
