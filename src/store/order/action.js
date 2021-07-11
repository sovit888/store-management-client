import {
  GET_ORDERS,
  CREATE_ORDERS,
  UPDATE_ORDERS,
  DELETE_ORDERS,
} from "./actionType";

export const getOrder = () => {
  return {
    type: GET_ORDERS,
  };
};

export const createOrder = (payload) => {
  return {
    type: CREATE_ORDERS,
    payload: payload,
  };
};

export const updateOrder = (payload) => {
  return {
    type: UPDATE_ORDERS,
    payload: payload,
  };
};

export const deleteOrder = (payload) => {
  return {
    type: DELETE_ORDERS,
    payload: payload,
  };
};
