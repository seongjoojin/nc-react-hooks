import { useRef, useEffect } from "react";

export const useClick = (
  onClick: (this: HTMLHeadingElement, ev: MouseEvent) => any
) => {
  const element = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const current = element.current;
    if (current) current.addEventListener("click", onClick);
    return () => {
      if (current) current.removeEventListener("click", onClick);
    };
  }, [onClick]);
  return element;
};
