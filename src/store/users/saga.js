import { put, call, takeEvery, all } from "redux-saga/effects";
import {
  GET_USERS,
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  CREATE_USERS,
  CREATE_USERS_SUCCESS,
  UPDATE_USERS,
  UPDATE_USERS_SUCCESS,
  DELETE_USERS,
  DELETE_USERS_SUCCESS,
} from "./actionType";
import { getUserApi, createUserApi, updateUserApi, deleteUserApi } from "./api";

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
function* createUsersAsync({ payload }) {
  try {
    const { data } = yield call(createUserApi, payload);
    if (data) {
      yield put({ type: CREATE_USERS_SUCCESS, payload: data.user });
    }
  } catch (error) {}
}
function* updateUsersAsync({ payload }) {
  try {
    const { data } = yield call(updateUserApi, payload);
    console.log(data);
    if (data) {
      yield put({ type: UPDATE_USERS_SUCCESS, payload: data.user });
    }
  } catch (error) {}
}
function* deleteUsersAsync({ payload }) {
  try {
    const { data } = yield call(deleteUserApi, payload);
    if (data) {
      yield put({ type: DELETE_USERS_SUCCESS, payload: data.user });
    }
  } catch (error) {}
}

function* getUsers() {
  yield takeEvery(GET_USERS, getUsersAsync);
}
function* createUsers() {
  yield takeEvery(CREATE_USERS, createUsersAsync);
}
function* updateUsers() {
  yield takeEvery(UPDATE_USERS, updateUsersAsync);
}
function* deleteUsers() {
  yield takeEvery(DELETE_USERS, deleteUsersAsync);
}
function* userSaga() {
  yield all([getUsers(), createUsers(), updateUsers(), deleteUsers()]);
}

export default userSaga;
