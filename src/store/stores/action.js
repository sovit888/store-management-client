import {
  GET_STORES,
  CREATE_STORES,
  UPDATE_STORES,
  DELETE_STORES,
} from "./actionType";

export const getStore = () => {
  return {
    type: GET_STORES,
  };
};

export const createStore = (store) => {
  return {
    type: CREATE_STORES,
    payload: store,
  };
};

export const updateStore = (store) => {
  return {
    type: UPDATE_STORES,
    payload: store,
  };
};

export const deleteStore = (storeId) => {
  return {
    type: DELETE_STORES,
    payload: storeId,
  };
};
