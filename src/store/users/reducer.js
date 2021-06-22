import {
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
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
    default:
      return state;
  }
};
export default usersReducer;
