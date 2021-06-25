import { put, takeEvery, call, all } from "redux-saga/effects";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  CREATE_PRODUCTS,
  CREATE_PRODUCTS_SUCCESS,
  DELETE_PRODUCTS,
  DELETE_PRODUCTS_SUCCESS,
  UPDATE_PRODUCTS,
  UPDATE_PRODUCTS_SUCCESS,
} from "./actionType";
import {
  getProductApi,
  createProductApi,
  deleteProductApi,
  updateProductApi,
} from "./api";

function* getProductAsync() {
  yield put({ type: GET_PRODUCTS_LOADING });
  try {
    const { data } = yield call(getProductApi);
    if (data) {
      yield put({ type: GET_PRODUCTS_SUCCESS, payload: data.products });
    } else {
      yield put({ type: GET_PRODUCTS_ERROR, payload: "cannot get data" });
    }
  } catch (error) {
    yield put({ type: GET_PRODUCTS_ERROR, payload: "cannot get data" });
  }
}

function* createProductAsync({ payload }) {
  try {
    const { data } = yield call(createProductApi, payload);
    if (data) {
      yield put({ type: CREATE_PRODUCTS_SUCCESS, payload: data.product });
    }
  } catch (error) {}
}
function* deleteProductAsync({ payload }) {
  try {
    const { data } = yield call(deleteProductApi, payload);
    if (data) {
      yield put({ type: DELETE_PRODUCTS_SUCCESS, payload: data.product });
    }
  } catch (error) {}
}
function* updateProductAsync({ payload }) {
  try {
    const { data } = yield call(updateProductApi, payload);
    if (data) {
      yield put({ type: UPDATE_PRODUCTS_SUCCESS, payload: data.product });
    }
  } catch (error) {}
}
function* getProduct() {
  yield takeEvery(GET_PRODUCTS, getProductAsync);
}
function* createProduct() {
  yield takeEvery(CREATE_PRODUCTS, createProductAsync);
}
function* deleteProduct() {
  yield takeEvery(DELETE_PRODUCTS, deleteProductAsync);
}
function* updateProduct() {
  yield takeEvery(UPDATE_PRODUCTS, updateProductAsync);
}

export default function* productSaga() {
  yield all([getProduct(), createProduct(), deleteProduct(), updateProduct()]);
}
