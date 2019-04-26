import { combineReducers } from "redux";
import posts from "../duck/FetchPost";

export default () => combineReducers({
  posts,
});
