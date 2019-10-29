export const usePreventLeave = () => {
  const lisner = (event: BeforeUnloadEvent) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", lisner);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", lisner);
  return { enablePrevent, disablePrevent };
};
