import { useRef } from "react";

interface FsDocument extends HTMLDocument {
  mozFullScreenElement?: Element;
  msFullscreenElement?: Element;
  webkitFullscreenElement?: Element;
  msExitFullscreen?: () => void;
  mozCancelFullScreen?: () => void;
  webkitExitFullscreen?: () => void;
}

export const useFullScreen = (callback?: (isFull: boolean) => void) => {
  const element = useRef<any>(null);
  const runCb = (isFull: boolean) => {
    if (callback) callback(isFull);
  };
  const triggerFullscreen = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  };
  const exitFullscreen = () => {
    const fsDoc = document as FsDocument;
    if (fsDoc.exitFullscreen) {
      fsDoc.exitFullscreen();
    } else if (fsDoc.mozCancelFullScreen) {
      fsDoc.mozCancelFullScreen();
    } else if (fsDoc.webkitExitFullscreen) {
      fsDoc.webkitExitFullscreen();
    } else if (fsDoc.msExitFullscreen) {
      fsDoc.msExitFullscreen();
    }
    runCb(false);
  };
  return { element, triggerFullscreen, exitFullscreen };
};
