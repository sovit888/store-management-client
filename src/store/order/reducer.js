import {
  GET_ORDERS_LOADING,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_ERROR,
  CREATE_ORDERS_SUCCESS,
  UPDATE_ORDERS_SUCCESS,
  DELETE_ORDERS_SUCCESS,
} from "./actionType";
const initailState = {
  loading: false,
  error: null,
  lists: [],
};

const ordersReducer = (state = initailState, action) => {
  switch (action.type) {
    case GET_ORDERS_LOADING:
      return { lists: [], error: null, loading: true };
    case GET_ORDERS_SUCCESS:
      return { loading: false, error: null, lists: action.payload };
    case GET_ORDERS_ERROR:
      return { loading: false, error: action.payload, lists: [] };
    case CREATE_ORDERS_SUCCESS:
      return { ...state, lists: [action.payload, ...state.lists] };
    case UPDATE_ORDERS_SUCCESS:
      let index = state.lists.findIndex(
        (value) => value._id === action.payload._id
      );
      let lists = [...state.lists];
      lists[index] = action.payload;
      return { ...state, lists: lists };
    case DELETE_ORDERS_SUCCESS:
      return {
        ...state,
        lists: state.lists.filter((value) => value._id !== action.payload._id),
      };
    default:
      return state;
  }
};
export default ordersReducer;
