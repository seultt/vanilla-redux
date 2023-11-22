import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const CREATE_TO_DO = "CREATE_TO_DO";
const toDoModifier = (toDo = [], action) => {
  console.log(action);
  switch (action.type) {
    case CREATE_TO_DO:
      return [...toDo, action.value];

    default:
      return toDo;
  }
};

const toDoStore = createStore(toDoModifier);
const createToDo = () => {
  const li = document.createElement("li");
  li.innerText = toDoStore.getState();
  ul.appendChild(li);
};
toDoStore.subscribe(createToDo);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  toDoStore.dispatch({ type: CREATE_TO_DO, value: toDo });
  // createToDo(toDo);
};

form.addEventListener("submit", onSubmit);
