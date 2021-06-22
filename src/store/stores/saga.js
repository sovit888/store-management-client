import { put, call, takeEvery, all } from "redux-saga/effects";
import {
  GET_STORES,
  GET_STORES_LOADING,
  GET_STORES_SUCCESS,
  GET_STORES_ERROR,
} from "./actionType";
import { getStoreApi } from "./api";

function* getStoresAsync() {
  yield put({ type: GET_STORES_LOADING });
  try {
    const { data, error } = yield call(getStoreApi);
    console.log(data);
    if (data) {
      yield put({ type: GET_STORES_SUCCESS, payload: data.stores });
    } else {
      yield put({ type: GET_STORES_ERROR, payload: error });
    }
  } catch (error) {
    yield put({ type: GET_STORES_ERROR, payload: "Error" });
  }
}

function* getStores() {
  yield takeEvery(GET_STORES, getStoresAsync);
}

function* storeSaga() {
  yield all([getStores()]);
}

export default storeSaga;
