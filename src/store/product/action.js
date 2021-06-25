import {
  GET_PRODUCTS,
  CREATE_PRODUCTS,
  DELETE_PRODUCTS,
  UPDATE_PRODUCTS,
} from "./actionType";

export const getProduct = () => {
  return {
    type: GET_PRODUCTS,
  };
};

export const createProduct = (payload) => {
  return {
    type: CREATE_PRODUCTS,
    payload: payload,
  };
};

export const updateProduct = (payload) => {
  return {
    type: UPDATE_PRODUCTS,
    payload: payload,
  };
};

export const deleteProduct = (payload) => {
  return {
    type: DELETE_PRODUCTS,
    payload: payload,
  };
};
