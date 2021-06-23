import { put, call, takeEvery, all } from "redux-saga/effects";
import {
  GET_STORES,
  GET_STORES_LOADING,
  GET_STORES_SUCCESS,
  GET_STORES_ERROR,
  CREATE_STORES,
  CREATE_STORES_SUCCESS,
  UPDATE_STORES,
  UPDATE_STORES_SUCCESS,
  DELETE_STORES_SUCCESS,
  DELETE_STORES,
} from "./actionType";
import {
  getStoreApi,
  createStoreApi,
  updateStoreApi,
  deleteStoreApi,
} from "./api";

function* getStoresAsync() {
  yield put({ type: GET_STORES_LOADING });
  try {
    const { data, error } = yield call(getStoreApi);
    if (data) {
      yield put({ type: GET_STORES_SUCCESS, payload: data.stores });
    } else {
      yield put({ type: GET_STORES_ERROR, payload: error });
    }
  } catch (error) {
    yield put({ type: GET_STORES_ERROR, payload: "Error" });
  }
}

function* createStoresAsync({ payload }) {
  try {
    const { data } = yield call(createStoreApi, payload);
    if (data) {
      yield put({ type: CREATE_STORES_SUCCESS, payload: data.store });
    }
  } catch (error) {}
}

function* updateStoresAsync({ payload }) {
  try {
    const { data } = yield call(updateStoreApi, payload);
    if (data) {
      yield put({ type: UPDATE_STORES_SUCCESS, payload: data.store });
    }
  } catch (error) {}
}

function* deleteStoresAsync({ payload }) {
  console.log(payload);
  try {
    const { data } = yield call(deleteStoreApi, payload);
    console.log(data);
    if (data) {
      yield put({ type: DELETE_STORES_SUCCESS, payload: data.store });
    }
  } catch (error) {}
}

function* getStores() {
  yield takeEvery(GET_STORES, getStoresAsync);
}
function* createStores() {
  yield takeEvery(CREATE_STORES, createStoresAsync);
}
function* updateStores() {
  yield takeEvery(UPDATE_STORES, updateStoresAsync);
}
function* deleteStores() {
  yield takeEvery(DELETE_STORES, deleteStoresAsync);
}

function* storeSaga() {
  yield all([getStores(), createStores(), updateStores(), deleteStores()]);
}

export default storeSaga;
