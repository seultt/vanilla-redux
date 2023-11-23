import { legacy_createStore } from "redux";
import { getStorage, setStorage } from "./storage";
import { createAction } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const initialState = getStorage() || [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter((item) => item.id !== action.payload);
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
