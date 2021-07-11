import { takeEvery, call, put, all } from "redux-saga/effects";
import {
  GET_ORDERS,
  GET_ORDERS_LOADING,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_ERROR,
  CREATE_ORDERS,
  CREATE_ORDERS_SUCCESS,
  UPDATE_ORDERS,
  UPDATE_ORDERS_SUCCESS,
  DELETE_ORDERS,
  DELETE_ORDERS_SUCCESS,
} from "./actionType";
import {
  getOrderApi,
  createOrderApi,
  updateOrderApi,
  deleteOrderApi,
} from "./api";
function* getOrderAsync() {
  yield put({ type: GET_ORDERS_LOADING });
  try {
    const { data } = yield call(getOrderApi);

    if (data) {
      yield put({ type: GET_ORDERS_SUCCESS, payload: data.orders });
    }
  } catch (error) {
    yield put({ type: GET_ORDERS_ERROR, payload: "error" });
  }
}
function* createOrderAsync({ payload }) {
  try {
    const { data } = yield call(createOrderApi, payload);
    if (data) {
      yield put({ type: CREATE_ORDERS_SUCCESS, payload: data.order });
    }
  } catch (error) {}
}
function* updateOrderAsync({ payload }) {
  try {
    const { data } = yield call(updateOrderApi, payload);
    console.log(data.order);
    if (data) {
      yield put({ type: UPDATE_ORDERS_SUCCESS, payload: data.order });
    }
  } catch (error) {}
}

function* deleteOrderAsync({ payload }) {
  try {
    const { data } = yield call(deleteOrderApi, payload);
    console.log(data.order);
    if (data) {
      yield put({ type: DELETE_ORDERS_SUCCESS, payload: data.order });
    }
  } catch (error) {}
}

function* getOrder() {
  yield takeEvery(GET_ORDERS, getOrderAsync);
}
function* createOrder() {
  yield takeEvery(CREATE_ORDERS, createOrderAsync);
}
function* updateOrder() {
  yield takeEvery(UPDATE_ORDERS, updateOrderAsync);
}
function* deleteOrder() {
  yield takeEvery(DELETE_ORDERS, deleteOrderAsync);
}
export default function* orderSaga() {
  yield all([getOrder(), createOrder(), updateOrder(), deleteOrder()]);
}
