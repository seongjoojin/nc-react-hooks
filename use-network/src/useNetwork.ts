import { useState, useEffect, useCallback } from "react";

export const useNetwork = (onChange?: (online: boolean) => void) => {
  const [status, setStatus] = useState<boolean>(navigator.onLine);
  const hadleChange = useCallback(() => {
    onChange ? onChange(navigator.onLine) : setStatus(navigator.onLine);
  }, [onChange]);
  useEffect(() => {
    window.addEventListener("online", hadleChange);
    window.addEventListener("offline", hadleChange);
    return () => {
      window.removeEventListener("online", hadleChange);
      window.removeEventListener("offline", hadleChange);
    };
  }, []);
  return status;
};
