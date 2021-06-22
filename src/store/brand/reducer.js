import {
  GET_BRANDS_LOADING,
  GET_BRANDS_SUCCESS,
  GET_BRANDS_ERROR,
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
    default:
      return state;
  }
};
export default brandsReducer;
