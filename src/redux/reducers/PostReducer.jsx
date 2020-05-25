import { FETCH_POST, ADD_POST } from "../types/Types";

const initialState = {
  items: [],
  item: {},
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST:
      return {
        ...state,
        items: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
