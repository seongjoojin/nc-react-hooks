import { useRef, useEffect } from "react";

export const useFadeIn = (
  duration: number = 1,
  delay: number = 0,
  timing: string = "ease-in-out"
) => {
  const element: React.MutableRefObject<any> = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ${timing} ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};
