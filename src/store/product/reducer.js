import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  CREATE_PRODUCTS_SUCCESS,
  UPDATE_PRODUCTS_SUCCESS,
  DELETE_PRODUCTS_SUCCESS,
} from "./actionType";
const initailState = {
  loading: false,
  error: null,
  lists: [],
};

const productsReducer = (state = initailState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_LOADING:
      return { lists: [], error: null, loading: true };
    case GET_PRODUCTS_SUCCESS:
      return { loading: false, error: null, lists: action.payload };
    case GET_PRODUCTS_ERROR:
      return { loading: false, error: action.payload, lists: [] };
    case CREATE_PRODUCTS_SUCCESS:
      return { ...state, lists: [action.payload, ...state.lists] };
    case UPDATE_PRODUCTS_SUCCESS:
      let index = state.lists.findIndex(
        (value) => value._id === action.payload._id
      );
      let lists = [...state.lists];
      lists[index] = action.payload;
      return { ...state, lists: lists };
    case DELETE_PRODUCTS_SUCCESS:
      return {
        ...state,
        lists: state.lists.filter((value) => value._id !== action.payload._id),
      };
    default:
      return state;
  }
};
export default productsReducer;
