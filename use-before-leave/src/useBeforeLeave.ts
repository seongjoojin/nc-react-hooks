import { useEffect } from "react";

export const useBeforeLeave = (onBefore: () => void) => {
  const handle = (event: MouseEvent) => {
    const { clientY } = event;
    if (clientY <= 0) onBefore();
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
