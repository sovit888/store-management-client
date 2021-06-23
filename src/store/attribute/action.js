import {
  GET_ATTRIBUTES,
  CREATE_ATTRIBUTES,
  UPDATE_ATTRIBUTES,
  DELETE_ATTRIBUTES,
} from "./actionType";

export const getAttribute = () => {
  return {
    type: GET_ATTRIBUTES,
  };
};

export const createAttribute = (attribute) => {
  return {
    type: CREATE_ATTRIBUTES,
    payload: attribute,
  };
};

export const updateAttribute = (attribute) => {
  return {
    type: UPDATE_ATTRIBUTES,
    payload: attribute,
  };
};

export const deleteAttribute = (attributeId) => {
  return {
    type: DELETE_ATTRIBUTES,
    payload: attributeId,
  };
};
