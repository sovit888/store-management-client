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

export const createGroupApi = (group) => {
  return authAxios
    .post("/group", group)
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};

export const updateGroupApi = (group) => {
  return authAxios
    .put("/group", group)
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};

export const deleteGroupApi = (groupId) => {
  return authAxios
    .delete(`/group/${groupId}`)
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};
