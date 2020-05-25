import { FETCH_POST, ADD_POST } from "../types/Types";

export const fetchPosts = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => dispatch({ type: FETCH_POST, payload: posts }));
};

export const addPost = (post) => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(post),
  })
    .then((res) => res.json(res))
    .then((post) => dispatch({ type: ADD_POST, payload: post }));
};
