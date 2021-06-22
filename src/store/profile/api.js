import authAxios from "../../utils/authAxios";

export const getProfileApi = () => {
  return authAxios
    .get("/profile")
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};
