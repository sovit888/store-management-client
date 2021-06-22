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

export const createCategoryApi = (category) => {
  return authAxios
    .post("/category", category)
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};

export const updateCategoryApi = (category) => {
  return authAxios
    .put("/category", category)
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};

export const deleteCategoryApi = (categoryId) => {
  return authAxios
    .delete(`/category/${categoryId}`)
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};
