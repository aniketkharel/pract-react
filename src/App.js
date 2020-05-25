import React from "react";
import "./App.css";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
import { Provider } from "react-redux";
import store from "./redux/store/Store";

//wrap inside provider, provide contains store which should be defined right
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddPost />
        <Post />
      </div>
    </Provider>
  );
}

export default App;
