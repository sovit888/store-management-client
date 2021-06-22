import authAxios from "../../utils/authAxios";

export const getStoreApi = () => {
  return authAxios
    .get("/store")
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};

export const createStoreApi = (store) => {
  return authAxios
    .post("/store", store)
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};

export const updateStoreApi = (store) => {
  return authAxios
    .put("/store", store)
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};

export const deleteStoreApi = (storeId) => {
  return authAxios
    .delete(`/store/${storeId}`)
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};
