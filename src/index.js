import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return (count = count + 1);
  } else if (action.type === "MINUS") {
    return (count = count - 1);
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);
number.innerText = countStore.getState();

const updateText = () => {
  number.innerText = countStore.getState();
};
const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
  updateText();
};
const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
  updateText();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
// console.log(countStore.getState());

// let count = 0;
// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// };

// const handleAdd = () => {
//   console.log("add");
//   count = count + 1;
//   updateText();
// };
// const handleMinus = () => {
//   console.log("minus");
//   count = count - 1;
//   updateText();
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);
