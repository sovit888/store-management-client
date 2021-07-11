import {
  GET_PROFILE_LOADING,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  UPDATE_PROFILE_SUCCESS,
  REMOVE_PROFILE_SUCCESS,
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
    case UPDATE_PROFILE_SUCCESS:
      return { loading: false, error: null, info: action.payload };
    case REMOVE_PROFILE_SUCCESS:
      return initailState;
    default:
      return state;
  }
};
export default profileReducer;
