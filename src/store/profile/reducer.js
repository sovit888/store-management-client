import {
  GET_PROFILE_LOADING,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
} from "./actionType";

const initailState = {
  loading: false,
  error: null,
  info: {},
};

const profileReducer = (state = initailState, action) => {
  switch (action.type) {
    case GET_PROFILE_LOADING:
      return { ...state, loading: true };
    case GET_PROFILE_SUCCESS:
      return { loading: false, error: null, info: action.payload };
    case GET_PROFILE_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export default profileReducer;
