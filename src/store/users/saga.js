import { put, call, takeEvery, all } from "redux-saga/effects";
import {
  GET_USERS,
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
} from "./actionType";
import { getUserApi } from "./api";

function* getUsersAsync() {
  yield put({ type: GET_USERS_LOADING });
  try {
    const { data, error } = yield call(getUserApi);
    if (data) {
      yield put({ type: GET_USERS_SUCCESS, payload: data.users });
    } else {
      yield put({ type: GET_USERS_ERROR, payload: error });
    }
  } catch (error) {
    yield put({ type: GET_USERS_ERROR, payload: "Error" });
  }
}

function* getUsers() {
  yield takeEvery(GET_USERS, getUsersAsync);
}

function* userSaga() {
  yield all([getUsers()]);
}

export default userSaga;
