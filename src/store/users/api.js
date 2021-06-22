import authAxios from "../../utils/authAxios";

export const getUserApi = () => {
  return authAxios
    .get("/user")
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};
