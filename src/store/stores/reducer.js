import {
  GET_STORES_LOADING,
  GET_STORES_SUCCESS,
  GET_STORES_ERROR,
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
    default:
      return state;
  }
};
export default storesReducer;
