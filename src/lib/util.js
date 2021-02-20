export const localStorageSerializer = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value));

export const localStorageDeserializer = (key) =>
  JSON.parse(window.localStorage.getItem(key));

export const localStorageRemoveItem = (key) =>
  window.localStorage.removeItem(key);
