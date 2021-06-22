import authAxios from "../../utils/authAxios";

export const getCategoryApi = () => {
  return authAxios
    .get("/category")
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};
