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

export const createUserApi = (user) => {
  return authAxios
    .post("/auth/signup", user)
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};

export const updateUserApi = (user) => {
  return authAxios
    .put("/user", user)
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};
export const deleteUserApi = (userId) => {
  return authAxios
    .delete(`/user/${userId}`)
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};
