import { put, call, takeEvery, all } from "redux-saga/effects";
import { getProfileApi, updateProfileApi } from "./api";
import {
  GET_PROFILE,
  GET_PROFILE_LOADING,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  REMOVE_PROFILE_SUCCESS,
  REMOVE_PROFILE,
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
function* updateProfileAsync({ payload }) {
  try {
    const { data } = yield call(updateProfileApi, payload);
    console.log(data);
    if (data) {
      yield put({ type: UPDATE_PROFILE_SUCCESS, payload: data });
    }
  } catch (error) {}
}

function* removeProfileAsync() {
  yield put({ type: REMOVE_PROFILE_SUCCESS });
}

function* getProfile() {
  yield takeEvery(GET_PROFILE, getProfileAsync);
}
function* updateProfile() {
  yield takeEvery(UPDATE_PROFILE, updateProfileAsync);
}
function* removeProfile() {
  yield takeEvery(REMOVE_PROFILE, removeProfileAsync);
}
export default function* profileSaga() {
  yield all([getProfile(), updateProfile(), removeProfile()]);
}
