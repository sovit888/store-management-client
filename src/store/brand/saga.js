import { put, call, takeEvery, all } from "redux-saga/effects";
import {
  GET_BRANDS,
  GET_BRANDS_LOADING,
  GET_BRANDS_SUCCESS,
  GET_BRANDS_ERROR,
  CREATE_BRANDS,
  CREATE_BRANDS_SUCCESS,
  UPDATE_BRANDS,
  UPDATE_BRANDS_SUCCESS,
  DELETE_BRANDS,
  DELETE_BRANDS_SUCCESS,
} from "./actionType";
import {
  getBrandApi,
  createBrandApi,
  updateBrandApi,
  deleteBrandApi,
} from "./api";

function* getBrandsAsync() {
  yield put({ type: GET_BRANDS_LOADING });
  try {
    const { data, error } = yield call(getBrandApi);
    if (data) {
      yield put({ type: GET_BRANDS_SUCCESS, payload: data.brands });
    } else {
      yield put({ type: GET_BRANDS_ERROR, payload: error });
    }
  } catch (error) {
    yield put({ type: GET_BRANDS_ERROR, payload: "Error" });
  }
}

function* createBrandsAsync({ payload }) {
  try {
    const { data } = yield call(createBrandApi, payload);
    if (data) {
      yield put({ type: CREATE_BRANDS_SUCCESS, payload: data.brand });
    }
  } catch (error) {}
}

function* updateBrandsAsync({ payload }) {
  try {
    const { data } = yield call(updateBrandApi, payload);
    if (data) {
      yield put({ type: UPDATE_BRANDS_SUCCESS, payload: data.brand });
    }
  } catch (error) {}
}

function* deleteBrandsAsync({ payload }) {
  console.log(payload);
  try {
    const { data } = yield call(deleteBrandApi, payload);
    console.log(data);
    if (data) {
      yield put({ type: DELETE_BRANDS_SUCCESS, payload: data.brand });
    }
  } catch (error) {}
}

function* getBrands() {
  yield takeEvery(GET_BRANDS, getBrandsAsync);
}
function* createBrands() {
  yield takeEvery(CREATE_BRANDS, createBrandsAsync);
}
function* updateBrands() {
  yield takeEvery(UPDATE_BRANDS, updateBrandsAsync);
}
function* deleteBrands() {
  yield takeEvery(DELETE_BRANDS, deleteBrandsAsync);
}

function* brandSaga() {
  yield all([getBrands(), createBrands(), updateBrands(), deleteBrands()]);
}

export default brandSaga;
