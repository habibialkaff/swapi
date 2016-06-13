export function debounce(func) {
  let timeout;
  return (...args) => {
    const self = this;
    const later = () => {
      timeout = null;
      func.apply(self, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, 250);
  };
}
