import axios from "axios";

export const getBrandApi = () => {
  return axios
    .get("http://localhost:2000/api/brand", {
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

export const createBrandApi = (brand) => {
  return axios
    .post("http://localhost:2000/api/brand", brand, {
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

export const updateBrandApi = (brand) => {
  return axios
    .put("http://localhost:2000/api/brand", brand, {
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

export const deleteBrandApi = (brandId) => {
  return axios
    .delete(`http://localhost:2000/api/brand/${brandId}`, {
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
