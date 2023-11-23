import { getStorage, setStorage } from "./storage";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = getStorage() || [];

const toDos = createSlice({
  name: "toDosReducer",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((item) => item.id !== action.payload),
  },
});

const store = configureStore({ reducer: toDos.reducer });

const changeReducer = () => {
  setStorage("data", store.getState());
};
store.subscribe(changeReducer);

export const { add, remove } = toDos.actions;

export default store;
