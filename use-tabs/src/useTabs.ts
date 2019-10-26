import { useState } from "react";

export const useTabs = (initialTab: number, allTabs: any[]) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeIetm: setCurrentIndex
  };
};
