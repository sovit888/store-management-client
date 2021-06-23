import {
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  CREATE_USERS_SUCCESS,
  UPDATE_USERS_SUCCESS,
  DELETE_USERS_SUCCESS,
} from "./actionType";
const initailState = {
  loading: false,
  error: null,
  lists: [],
};

const usersReducer = (state = initailState, action) => {
  switch (action.type) {
    case GET_USERS_LOADING:
      return { lists: [], error: null, loading: true };
    case GET_USERS_SUCCESS:
      return { loading: false, error: null, lists: action.payload };
    case GET_USERS_ERROR:
      return { loading: false, error: action.payload, lists: [] };
    case CREATE_USERS_SUCCESS:
      return { ...state, lists: [action.payload, ...state.lists] };
    case UPDATE_USERS_SUCCESS:
      let index = state.lists.findIndex(
        (value) => value._id === action.payload._id
      );
      let lists = [...state.lists];
      lists[index] = action.payload;
      return { ...state, lists: lists };
    case DELETE_USERS_SUCCESS:
      return {
        ...state,
        lists: state.lists.filter((value) => value._id !== action.payload._id),
      };
    default:
      return state;
  }
};
export default usersReducer;
