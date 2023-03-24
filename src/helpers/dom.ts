export const isBottomOfElement = (element: HTMLElement | null): boolean => {
  return element ? element.getBoundingClientRect().bottom < window.innerHeight : false;
};
