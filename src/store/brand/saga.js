import { put, call, takeEvery, all } from "redux-saga/effects";
import {
  GET_BRANDS,
  GET_BRANDS_LOADING,
  GET_BRANDS_SUCCESS,
  GET_BRANDS_ERROR,
} from "./actionType";
import { getBrandApi } from "./api";

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

function* getBrands() {
  yield takeEvery(GET_BRANDS, getBrandsAsync);
}

function* brandSaga() {
  yield all([getBrands()]);
}

export default brandSaga;
