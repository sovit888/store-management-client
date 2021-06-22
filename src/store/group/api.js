import authAxios from "../../utils/authAxios";

export const getGroupApi = () => {
  return authAxios
    .get("/group")
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};
