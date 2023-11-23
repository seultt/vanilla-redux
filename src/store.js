import { legacy_createStore } from "redux";
import { getStorage, setStorage } from "./storage";
import { createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const initialState = getStorage() || [];

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((item) => item.id !== action.payload);
//     default:
//       return state;
//   }
// };

const reducer = createReducer(initialState, {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter((item) => item.id !== action.payload),
});

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
