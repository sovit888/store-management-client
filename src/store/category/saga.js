import { put, call, takeEvery, all } from "redux-saga/effects";
import {
  GET_CATEGORYS,
  GET_CATEGORYS_LOADING,
  GET_CATEGORYS_SUCCESS,
  GET_CATEGORYS_ERROR,
  CREATE_CATEGORYS_SUCCESS,
  CREATE_CATEGORYS,
  UPDATE_CATEGORYS,
  UPDATE_CATEGORYS_SUCCESS,
  DELETE_CATEGORYS_SUCCESS,
  DELETE_CATEGORYS,
} from "./actionType";
import {
  getCategoryApi,
  createCategoryApi,
  updateCategoryApi,
  deleteCategoryApi,
} from "./api";

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
function* createCategorysAsync({ payload }) {
  try {
    const { data } = yield call(createCategoryApi, payload);
    if (data) {
      yield put({ type: CREATE_CATEGORYS_SUCCESS, payload: data.category });
    }
  } catch (error) {}
}

function* updateCategorysAsync({ payload }) {
  try {
    const { data } = yield call(updateCategoryApi, payload);
    if (data) {
      yield put({ type: UPDATE_CATEGORYS_SUCCESS, payload: data.category });
    }
  } catch (error) {}
}

function* deleteCategorysAsync({ payload }) {
  try {
    const { data } = yield call(deleteCategoryApi, payload);
    console.log(data);
    if (data) {
      yield put({ type: DELETE_CATEGORYS_SUCCESS, payload: data.category });
    }
  } catch (error) {}
}

function* getCategorys() {
  yield takeEvery(GET_CATEGORYS, getCategorysAsync);
}
function* createCategorys() {
  yield takeEvery(CREATE_CATEGORYS, createCategorysAsync);
}
function* updateCategorys() {
  yield takeEvery(UPDATE_CATEGORYS, updateCategorysAsync);
}
function* deleteCategorys() {
  yield takeEvery(DELETE_CATEGORYS, deleteCategorysAsync);
}

function* categorySaga() {
  yield all([
    getCategorys(),
    createCategorys(),
    updateCategorys(),
    deleteCategorys(),
  ]);
}

export default categorySaga;
