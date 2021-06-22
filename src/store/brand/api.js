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

export const createBrandApi = (brand) => {
  return authAxios
    .post("/brand", brand)
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};

export const updateBrandApi = (brand) => {
  return authAxios
    .put("/brand", brand)
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};

export const deleteBrandApi = (brandId) => {
  return authAxios
    .delete(`/brand/${brandId}`)
    .then((response) => {
      return { data: response.data };
    })
    .catch((error) => {
      return { error: error.response.data.error };
    });
};
