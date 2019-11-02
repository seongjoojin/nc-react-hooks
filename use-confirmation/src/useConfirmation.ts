export const useConfirmation = (
  message: string,
  onConfirm: () => void,
  onCancel: () => void
) => {
  const confirmAction = () => {
    window.confirm(message) ? onConfirm() : onCancel();
  };
  return confirmAction;
};
