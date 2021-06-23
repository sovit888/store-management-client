import authAxios from "../../utils/authAxios";

export const getAttributeApi = () => {
  return authAxios
    .get("/attribute")
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};

export const createAttributeApi = (attribute) => {
  return authAxios
    .post("/attribute", attribute)
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};

export const updateAttributeApi = (attribute) => {
  return authAxios
    .put("/attribute", attribute)
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};

export const deleteAttributeApi = (attributeId) => {
  return authAxios
    .delete(`/attribute/${attributeId}`)
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};
