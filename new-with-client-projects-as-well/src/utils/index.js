export function debounce(func, delay) {
  let timeoutId;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

export const $All = (selector) => document.querySelectorAll(selector);
export const $ = (selector) => document.querySelector(selector);
