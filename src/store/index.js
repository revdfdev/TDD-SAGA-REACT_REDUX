import { applyMiddleware, compose, createStore } from "redux";
import createRootReducer from "../reducers";
import createRootSaga from "../sagas";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export const middleware = [sagaMiddleware];

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(),
    preloadedState,
    compose(
      applyMiddleware(...middleware),
    ));

  sagaMiddleware.run(createRootSaga);

  return store;
}
