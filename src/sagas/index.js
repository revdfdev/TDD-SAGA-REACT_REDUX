import { all } from "redux-saga/effects";
import { getPostSaga } from "../duck/FetchPost";

export default function* rootSaga() {
  yield all([getPostSaga()]);
}
