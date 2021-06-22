import {
  GET_GROUPS_LOADING,
  GET_GROUPS_SUCCESS,
  GET_GROUPS_ERROR,
} from "./actionType";
const initailState = {
  loading: false,
  error: null,
  lists: [],
};

const groupsReducer = (state = initailState, action) => {
  switch (action.type) {
    case GET_GROUPS_LOADING:
      return { lists: [], error: null, loading: true };
    case GET_GROUPS_SUCCESS:
      return { loading: false, error: null, lists: action.payload };
    case GET_GROUPS_ERROR:
      return { loading: false, error: action.payload, lists: [] };
    default:
      return state;
  }
};
export default groupsReducer;
