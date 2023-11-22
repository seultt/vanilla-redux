import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TO_DO = "DELETE_TO_DO";

const addToDo = (value) => {
  return {
    type: ADD_TODO,
    value,
  };
};

const deleteToDo = (id) => {
  return { type: DELETE_TO_DO, id };
};

const toDoModifier = (toDo = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ id: new Date().getTime(), text: action.value }, ...toDo];
    case DELETE_TO_DO:
      return toDo.filter((item) => item.id !== parseInt(action.id));

    default:
      return toDo;
  }
};

const store = createStore(toDoModifier);

const dispatchAddToDo = (value) => {
  store.dispatch(addToDo(value));
};
const dispatchDeleteToDo = (e) => {
  const id = e.target.parentNode.id;
  store.dispatch(deleteToDo(id));
};
const paintToDos = () => {
  ul.innerHTML = "";
  store.getState().forEach((element) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerHTML = "delete";
    button.addEventListener("click", dispatchDeleteToDo);
    li.id = element.id;
    li.innerText = element.text;
    li.appendChild(button);
    ul.appendChild(li);
  });
};
store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
