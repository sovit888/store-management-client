import {
  GET_CATEGORYS,
  UPDATE_CATEGORYS,
  DELETE_CATEGORYS,
  CREATE_CATEGORYS,
} from "./actionType";

export const getCategory = () => {
  return {
    type: GET_CATEGORYS,
  };
};

export const createCategory = (category) => {
  return {
    type: CREATE_CATEGORYS,
    payload: category,
  };
};

export const updateCategory = (category) => {
  return {
    type: UPDATE_CATEGORYS,
    payload: category,
  };
};

export const deleteCategory = (categoryId) => {
  return {
    type: DELETE_CATEGORYS,
    payload: categoryId,
  };
};
