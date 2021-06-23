import {
  GET_GROUPS,
  CREATE_GROUPS,
  UPDATE_GROUPS,
  DELETE_GROUPS,
} from "./actionType";

export const getGroup = () => {
  return {
    type: GET_GROUPS,
  };
};

export const createGroup = (group) => {
  return {
    type: CREATE_GROUPS,
    payload: group,
  };
};

export const updateGroup = (group) => {
  return {
    type: UPDATE_GROUPS,
    payload: group,
  };
};

export const deleteGroup = (groupId) => {
  return {
    type: DELETE_GROUPS,
    payload: groupId,
  };
};
