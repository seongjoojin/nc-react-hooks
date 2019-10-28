import { useRef, useEffect } from "react";

export const useHover = (
  onHover: (this: HTMLHeadingElement, ev: MouseEvent) => any
) => {
  const element = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (element.current)
      element.current.addEventListener("mouseenter", onHover);
    return () => {
      if (element.current)
        element.current.removeEventListener("mouseenter", onHover);
    };
  }, []);
  return element;
};
