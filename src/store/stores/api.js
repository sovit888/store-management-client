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
