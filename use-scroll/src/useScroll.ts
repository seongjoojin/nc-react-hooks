import { useState, useEffect } from "react";

export const useScroll = () => {
  let x: number = 0;
  let y: number = 0;
  const [state, setState] = useState({ x, y });
  const onScroll = () => {
    setState({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};
