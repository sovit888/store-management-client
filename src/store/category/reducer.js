import {
  GET_CATEGORYS_LOADING,
  GET_CATEGORYS_SUCCESS,
  GET_CATEGORYS_ERROR,
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
    default:
      return state;
  }
};
export default categorysReducer;
