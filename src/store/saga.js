import { all } from "redux-saga/effects";
import profileSaga from "./profile/saga";
import userSaga from "./users/saga";
import groupSaga from "./group/saga";
import brandSaga from "./brand/saga";
import categorySaga from "./category/saga";
import storeSaga from "./stores/saga";
import attributeSaga from "./attribute/saga";
import productSaga from "./product/saga";

export default function* rootSaga() {
  yield all([
    profileSaga(),
    userSaga(),
    groupSaga(),
    brandSaga(),
    categorySaga(),
    storeSaga(),
    attributeSaga(),
    productSaga(),
  ]);
}
