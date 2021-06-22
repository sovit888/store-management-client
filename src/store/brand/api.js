import authAxios from "../../utils/authAxios";

export const getBrandApi = () => {
  return authAxios
    .get("/brand")
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};
