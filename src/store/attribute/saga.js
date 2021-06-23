import { put, call, takeEvery, all } from "redux-saga/effects";
import {
  GET_ATTRIBUTES,
  GET_ATTRIBUTES_LOADING,
  GET_ATTRIBUTES_SUCCESS,
  GET_ATTRIBUTES_ERROR,
  CREATE_ATTRIBUTES_SUCCESS,
  CREATE_ATTRIBUTES,
  UPDATE_ATTRIBUTES,
  UPDATE_ATTRIBUTES_SUCCESS,
  DELETE_ATTRIBUTES,
  DELETE_ATTRIBUTES_SUCCESS,
} from "./actionType";
import {
  getAttributeApi,
  createAttributeApi,
  updateAttributeApi,
  deleteAttributeApi,
} from "./api";

function* getAttributesAsync() {
  yield put({ type: GET_ATTRIBUTES_LOADING });
  try {
    const { data, error } = yield call(getAttributeApi);

    if (data) {
      yield put({ type: GET_ATTRIBUTES_SUCCESS, payload: data.attributes });
    } else {
      yield put({ type: GET_ATTRIBUTES_ERROR, payload: error });
    }
  } catch (error) {
    yield put({ type: GET_ATTRIBUTES_ERROR, payload: "Error" });
  }
}

function* createAttributesAsync({ payload }) {
  try {
    const { data } = yield call(createAttributeApi, payload);
    if (data) {
      yield put({ type: CREATE_ATTRIBUTES_SUCCESS, payload: data.attribute });
    }
  } catch (error) {}
}

function* updateAttributesAsync({ payload }) {
  try {
    const { data } = yield call(updateAttributeApi, payload);
    if (data) {
      yield put({ type: UPDATE_ATTRIBUTES_SUCCESS, payload: data.attribute });
    }
  } catch (error) {}
}

function* deleteAttributesAsync({ payload }) {
  try {
    const { data } = yield call(deleteAttributeApi, payload);
    console.log(data);
    if (data) {
      yield put({ type: DELETE_ATTRIBUTES_SUCCESS, payload: data.attribute });
    }
  } catch (error) {}
}

function* getAttributes() {
  yield takeEvery(GET_ATTRIBUTES, getAttributesAsync);
}
function* createAttributes() {
  yield takeEvery(CREATE_ATTRIBUTES, createAttributesAsync);
}
function* updateAttributes() {
  yield takeEvery(UPDATE_ATTRIBUTES, updateAttributesAsync);
}
function* deleteAttributes() {
  yield takeEvery(DELETE_ATTRIBUTES, deleteAttributesAsync);
}

function* attributeSaga() {
  yield all([
    getAttributes(),
    createAttributes(),
    updateAttributes(),
    deleteAttributes(),
  ]);
}

export default attributeSaga;
