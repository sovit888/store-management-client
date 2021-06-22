import {
  GET_STORES_LOADING,
  GET_STORES_SUCCESS,
  GET_STORES_ERROR,
  CREATE_STORES_SUCCESS,
  UPDATE_STORES_SUCCESS,
  DELETE_STORES_SUCCESS,
} from "./actionType";
const initailState = {
  loading: false,
  error: null,
  lists: [],
};

const storesReducer = (state = initailState, action) => {
  switch (action.type) {
    case GET_STORES_LOADING:
      return { lists: [], error: null, loading: true };
    case GET_STORES_SUCCESS:
      return { loading: false, error: null, lists: action.payload };
    case GET_STORES_ERROR:
      return { loading: false, error: action.payload, lists: [] };
    case CREATE_STORES_SUCCESS:
      return { ...state, lists: [action.payload, ...state.lists] };
    case UPDATE_STORES_SUCCESS:
      let index = state.lists.findIndex(
        (value) => value._id === action.payload._id
      );
      let lists = [...state.lists];
      lists[index] = action.payload;
      return { ...state, lists: lists };
    case DELETE_STORES_SUCCESS:
      return {
        ...state,
        lists: state.lists.filter((value) => value._id !== action.payload._id),
      };
    default:
      return state;
  }
};
export default storesReducer;
