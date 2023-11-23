export const getStorage = () => {
  try {
    let data = localStorage.getItem("data");
    if (data === null) {
      return undefined;
    }
    return data ? JSON.parse(data) : data;
  } catch (error) {
    return undefined;
  }
};
export const setStorage = (key, value) => {
  try {
    const stringifyValue = JSON.stringify(value);
    localStorage.setItem(key, stringifyValue);
  } catch (error) {
    // error
  }
};
