import {
  GET_BRANDS_LOADING,
  GET_BRANDS_SUCCESS,
  GET_BRANDS_ERROR,
  CREATE_BRANDS_SUCCESS,
  UPDATE_BRANDS_SUCCESS,
  DELETE_BRANDS_SUCCESS,
} from "./actionType";
const initailState = {
  loading: false,
  error: null,
  lists: [],
};

const brandsReducer = (state = initailState, action) => {
  switch (action.type) {
    case GET_BRANDS_LOADING:
      return { lists: [], error: null, loading: true };
    case GET_BRANDS_SUCCESS:
      return { loading: false, error: null, lists: action.payload };
    case GET_BRANDS_ERROR:
      return { loading: false, error: action.payload, lists: [] };
    case CREATE_BRANDS_SUCCESS:
      return { ...state, lists: [action.payload, ...state.lists] };
    case UPDATE_BRANDS_SUCCESS:
      let index = state.lists.findIndex(
        (value) => value._id === action.payload._id
      );
      let lists = [...state.lists];
      lists[index] = action.payload;
      return { ...state, lists: lists };
    case DELETE_BRANDS_SUCCESS:
      return {
        ...state,
        lists: state.lists.filter((value) => value._id !== action.payload._id),
      };
    default:
      return state;
  }
};
export default brandsReducer;
