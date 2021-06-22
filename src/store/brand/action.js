import {
  GET_BRANDS,
  CREATE_BRANDS,
  UPDATE_BRANDS,
  DELETE_BRANDS,
} from "./actionType";

export const getBrand = () => {
  return {
    type: GET_BRANDS,
  };
};

export const createBrand = (brand) => {
  return {
    type: CREATE_BRANDS,
    payload: brand,
  };
};

export const updateBrand = (brand) => {
  return {
    type: UPDATE_BRANDS,
    payload: brand,
  };
};

export const deleteBrand = (brandId) => {
  return {
    type: DELETE_BRANDS,
    payload: brandId,
  };
};
