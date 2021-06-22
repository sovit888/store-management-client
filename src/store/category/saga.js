import { put, call, takeEvery, all } from "redux-saga/effects";
import {
  GET_CATEGORYS,
  GET_CATEGORYS_LOADING,
  GET_CATEGORYS_SUCCESS,
  GET_CATEGORYS_ERROR,
} from "./actionType";
import { getCategoryApi } from "./api";

function* getCategorysAsync() {
  yield put({ type: GET_CATEGORYS_LOADING });
  try {
    const { data, error } = yield call(getCategoryApi);
    if (data) {
      yield put({ type: GET_CATEGORYS_SUCCESS, payload: data.categories });
    } else {
      yield put({ type: GET_CATEGORYS_ERROR, payload: error });
    }
  } catch (error) {
    yield put({ type: GET_CATEGORYS_ERROR, payload: "Error" });
  }
}

function* getCategorys() {
  yield takeEvery(GET_CATEGORYS, getCategorysAsync);
}

function* categorySaga() {
  yield all([getCategorys()]);
}

export default categorySaga;
