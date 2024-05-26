import "client-only";
import Cookies from "js-cookie";

export function getLocalStorage(key, defaultValue) {
  let stickyValue = localStorage.getItem(key);

  if (stickyValue === null || stickyValue === "undefined") {
    stickyValue = Cookies.get(key);
  }

  return stickyValue !== null &&
    stickyValue !== "undefined" &&
    stickyValue !== undefined
    ? JSON.parse(stickyValue)
    : defaultValue;
}

export function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));

  if (getLocalStorage("cookies")) {
    Cookies.set(key, JSON.stringify(value), {});
  }
}
