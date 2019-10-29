export const useConfirm = (
  message: string,
  callback: () => void,
  rejection: () => void
) => {
  const confirmAction = () => {
    window.confirm(message) ? callback() : rejection();
  };
  return confirmAction;
};
