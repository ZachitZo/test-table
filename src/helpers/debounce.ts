const createDebounce = () => {
  let timeout: number | undefined;

  return function (fn: Function, delay?: number) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn();
    }, delay || 700);
  };
}

export default createDebounce;
