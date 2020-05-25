//its names as index.jsx because we dont even have to specify the filename inside the reducer folder if named as index.js

import { combineReducers } from "redux";
import postReducer from "./PostReducer";

export default combineReducers({
  posts: postReducer,
});
