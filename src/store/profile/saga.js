import { put, call, takeEvery, all } from "redux-saga/effects";
import { getProfileApi } from "./api";
import {
  GET_PROFILE,
  GET_PROFILE_LOADING,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
} from "./actionType";

function* getProfileAsync() {
  yield put({ type: GET_PROFILE_LOADING });
  try {
    const { data, error } = yield call(getProfileApi);
    if (data) {
      yield put({ type: GET_PROFILE_SUCCESS, payload: data });
    } else {
      yield put({ type: GET_PROFILE_ERROR, payload: error });
    }
  } catch (error) {
    yield put({ type: GET_PROFILE_ERROR, payload: "Sever" });
  }
}

function* getProfile() {
  yield takeEvery(GET_PROFILE, getProfileAsync);
}

export default function* profileSaga() {
  yield all([getProfile()]);
}
