import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TO_DO = "DELETE_TO_DO";
const toDoModifier = (toDo = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [...toDo, { id: new Date().getTime(), text: action.value }];
    case DELETE_TO_DO:
      return toDo.filter((item) => item.id !== action.id);

    default:
      return toDo;
  }
};

const toDoStore = createStore(toDoModifier);
const createToDo = () => {
  ul.innerHTML = "";
  toDoStore.getState().forEach((element) => {
    const li = document.createElement("li");
    li.addEventListener("click", () =>
      toDoStore.dispatch({ type: DELETE_TO_DO, id: element.id })
    );
    li.innerText = element.text;
    ul.appendChild(li);
  });
};
toDoStore.subscribe(createToDo);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  toDoStore.dispatch({
    type: ADD_TODO,
    value: toDo,
  });
  // createToDo(toDo);
};

form.addEventListener("submit", onSubmit);
