import { put, call, takeEvery } from "redux-saga/effects";
import { getPosts } from "../services/FetchPostService";

//Actions
const GET_POSTS = "rtdd/posts/getPosts";
const GET_POST_SUCCESS = "rtdd/post/getPostSuccess";
const GET_POST_ERROR = "rtdd/posts/getPostsError";

const initialState = {
  posts: [],
  error: null,
};

// reducers
export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POST_SUCCESS:
      return {
        ...state,
        posts: action.posts,
      };
    case GET_POST_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}

// action creator
export function getAllPosts() {
  console.log("action creator called");
  return {
    type: GET_POSTS,
  };
}
// sagas
function* handleGetAllPosts() {
  try {
    console.log("Api request initiated");
    const response = yield call(getPosts);
    console.log(JSON.stringify(response.data));
    yield put({ posts: response.data, type: GET_POST_SUCCESS });
  } catch (e) {
    yield put({ error: e.message, type: GET_POST_ERROR });
  }
}

export function* getPostSaga() {
  console.log("Saga called");
  yield takeEvery(GET_POSTS, handleGetAllPosts);
}
