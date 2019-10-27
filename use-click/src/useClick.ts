import { useRef, useEffect } from "react";

export const useClick = (
  onClick: (this: HTMLHeadingElement, ev: MouseEvent) => any
) => {
  const element = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (element.current) element.current.addEventListener("click", onClick);
    return () => {
      if (element.current)
        element.current.removeEventListener("click", onClick);
    };
  }, []);
  return element;
};
