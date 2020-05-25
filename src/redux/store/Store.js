import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//rootReducer
import rootReducer from "../reducers";

//create initialState
const initialState = {};

//for middleware stuff, multiple middleware goes into this array
const middleware = [thunk];

//create store and apply middleware, initialState and rootReducer
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
