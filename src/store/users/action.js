import {
  GET_USERS,
  CREATE_USERS,
  UPDATE_USERS,
  DELETE_USERS,
} from "./actionType";

export const getUser = () => {
  return {
    type: GET_USERS,
  };
};

export const createUser = (payload) => {
  return {
    type: CREATE_USERS,
    payload: payload,
  };
};
export const updateUser = (payload) => {
  return {
    type: UPDATE_USERS,
    payload: payload,
  };
};

export const deleteUser = (payload) => {
  return {
    type: DELETE_USERS,
    payload: payload,
  };
};
