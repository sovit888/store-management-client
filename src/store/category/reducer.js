import {
  GET_CATEGORYS_LOADING,
  GET_CATEGORYS_SUCCESS,
  GET_CATEGORYS_ERROR,
  CREATE_CATEGORYS_SUCCESS,
  UPDATE_CATEGORYS_SUCCESS,
  DELETE_CATEGORYS_SUCCESS,
} from "./actionType";
const initailState = {
  loading: false,
  error: null,
  lists: [],
};

const categorysReducer = (state = initailState, action) => {
  switch (action.type) {
    case GET_CATEGORYS_LOADING:
      return { lists: [], error: null, loading: true };
    case GET_CATEGORYS_SUCCESS:
      return { loading: false, error: null, lists: action.payload };
    case GET_CATEGORYS_ERROR:
      return { loading: false, error: action.payload, lists: [] };
    case CREATE_CATEGORYS_SUCCESS:
      return { ...state, lists: [action.payload, ...state.lists] };
    case UPDATE_CATEGORYS_SUCCESS:
      let index = state.lists.findIndex(
        (value) => value._id === action.payload._id
      );
      let lists = [...state.lists];
      lists[index] = action.payload;
      return { ...state, lists: lists };
    case DELETE_CATEGORYS_SUCCESS:
      return {
        ...state,
        lists: state.lists.filter((value) => value._id !== action.payload._id),
      };
    default:
      return state;
  }
};
export default categorysReducer;
