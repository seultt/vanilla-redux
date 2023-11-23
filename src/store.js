import { legacy_createStore } from "redux";
import { getStorage, setStorage } from "./storage";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};
const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const initialState = getStorage() || [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

const changeReducer = () => {
  setStorage("data", store.getState());
};
store.subscribe(changeReducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
