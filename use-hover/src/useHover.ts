import { useRef, useEffect } from "react";

export const useHover = (
  onHover: (this: HTMLHeadingElement, ev: MouseEvent) => any
) => {
  const element = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const current = element.current;
    if (current) current.addEventListener("mouseenter", onHover);
    return () => {
      if (current) current.removeEventListener("mouseenter", onHover);
    };
  }, [onHover]);
  return element;
};
