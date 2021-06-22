import { put, call, takeEvery, all } from "redux-saga/effects";
import {
  GET_GROUPS,
  GET_GROUPS_LOADING,
  GET_GROUPS_SUCCESS,
  GET_GROUPS_ERROR,
} from "./actionType";
import { getGroupApi } from "./api";

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

function* getGroups() {
  yield takeEvery(GET_GROUPS, getGroupsAsync);
}

function* groupSaga() {
  yield all([getGroups()]);
}

export default groupSaga;
