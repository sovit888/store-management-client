import { GET_PROFILE, UPDATE_PROFILE } from "./actionType";

export const getProfile = () => {
  return {
    type: GET_PROFILE,
  };
};

export const updateProfile = (payload) => {
  return {
    type: UPDATE_PROFILE,
    payload: payload,
  };
};
