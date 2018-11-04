export const persistToLocalStorage = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data))

export const getFromLocalStorage = key => JSON.parse(localStorage.getItem(key))
