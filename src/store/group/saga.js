import { put, call, takeEvery, all } from "redux-saga/effects";
import {
  GET_GROUPS,
  GET_GROUPS_LOADING,
  GET_GROUPS_SUCCESS,
  GET_GROUPS_ERROR,
  CREATE_GROUPS,
  CREATE_GROUPS_SUCCESS,
  UPDATE_GROUPS,
  UPDATE_GROUPS_SUCCESS,
  DELETE_GROUPS,
  DELETE_GROUPS_SUCCESS,
} from "./actionType";
import {
  getGroupApi,
  createGroupApi,
  updateGroupApi,
  deleteGroupApi,
} from "./api";

function* getGroupsAsync() {
  yield put({ type: GET_GROUPS_LOADING });
  try {
    const { data, error } = yield call(getGroupApi);
    if (data) {
      yield put({ type: GET_GROUPS_SUCCESS, payload: data.groups });
    } else {
      yield put({ type: GET_GROUPS_ERROR, payload: error });
    }
  } catch (error) {
    yield put({ type: GET_GROUPS_ERROR, payload: "Error" });
  }
}
function* createGroupsAsync({ payload }) {
  try {
    const { data } = yield call(createGroupApi, payload);
    if (data) {
      yield put({ type: CREATE_GROUPS_SUCCESS, payload: data.group });
    }
  } catch (error) {}
}
function* updateGroupsAsync({ payload }) {
  try {
    const { data } = yield call(updateGroupApi, payload);
    if (data) {
      yield put({ type: UPDATE_GROUPS_SUCCESS, payload: data.group });
    }
  } catch (error) {}
}
function* deleteGroupsAsync({ payload }) {
  try {
    const { data } = yield call(deleteGroupApi, payload);
    if (data) {
      yield put({ type: DELETE_GROUPS_SUCCESS, payload: data.group });
    }
  } catch (error) {}
}
function* getGroups() {
  yield takeEvery(GET_GROUPS, getGroupsAsync);
}

function* createGroups() {
  yield takeEvery(CREATE_GROUPS, createGroupsAsync);
}
function* updateGroups() {
  yield takeEvery(UPDATE_GROUPS, updateGroupsAsync);
}
function* deleteGroups() {
  yield takeEvery(DELETE_GROUPS, deleteGroupsAsync);
}

function* groupSaga() {
  yield all([getGroups(), createGroups(), updateGroups(), deleteGroups()]);
}

export default groupSaga;
