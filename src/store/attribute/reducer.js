import {
  GET_ATTRIBUTES_SUCCESS,
  GET_ATTRIBUTES_ERROR,
  GET_ATTRIBUTES_LOADING,
  CREATE_ATTRIBUTES_SUCCESS,
  UPDATE_ATTRIBUTES_SUCCESS,
  DELETE_ATTRIBUTES_SUCCESS,
} from "./actionType";
const initailState = {
  loading: false,
  error: null,
  lists: [],
};

const attributesReducer = (state = initailState, action) => {
  switch (action.type) {
    case GET_ATTRIBUTES_LOADING:
      return { lists: [], error: null, loading: true };
    case GET_ATTRIBUTES_SUCCESS:
      return { loading: false, error: null, lists: action.payload };
    case GET_ATTRIBUTES_ERROR:
      return { loading: false, error: action.payload, lists: [] };
    case CREATE_ATTRIBUTES_SUCCESS:
      return { ...state, lists: [action.payload, ...state.lists] };
    case UPDATE_ATTRIBUTES_SUCCESS:
      let index = state.lists.findIndex(
        (value) => value._id === action.payload._id
      );
      let lists = [...state.lists];
      lists[index] = action.payload;
      return { ...state, lists: lists };
    case DELETE_ATTRIBUTES_SUCCESS:
      return {
        ...state,
        lists: state.lists.filter((value) => value._id !== action.payload._id),
      };
    default:
      return state;
  }
};
export default attributesReducer;
