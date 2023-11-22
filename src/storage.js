export const getStorage = () => {
  let data = localStorage.getItem("data");
  return data ? JSON.parse(data) : data;
};
export const setStorage = (key, value) => {
  const stringifyValue = JSON.stringify(value);
  localStorage.setItem(key, stringifyValue);
};
