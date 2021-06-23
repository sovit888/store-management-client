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

export const updateProfileApi = (payload) => {
  return authAxios
    .put("/profile", payload)
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};
