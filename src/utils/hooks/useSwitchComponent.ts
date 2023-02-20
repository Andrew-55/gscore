import { useEffect } from "react";

export const useSwitchComponent = (
  ref: React.MutableRefObject<HTMLElement | null | undefined>,
  callback: (isMoveLeft: boolean) => void
) => {
  useEffect(() => {
    let startX = 0;
    const deltaMove = 50;

    const deleteMoveMouse = () => {
      document.removeEventListener("mousemove", moveMouse);
    };
    const deleteMoveTouch = () => {
      document.removeEventListener("touchmove", moveTouch);
    };

    const moveMouse = (event: MouseEvent) => {
      if (startX - event.clientX > deltaMove) {
        callback(true);
        deleteMoveMouse();
      }
      if (event.clientX - startX > deltaMove) {
        callback(false);
        deleteMoveMouse();
      }
    };

    const moveTouch = (event: TouchEvent) => {
      if (startX - event.targetTouches[0].clientX > deltaMove) {
        callback(true);
        deleteMoveTouch();
      }
      if (event.targetTouches[0].clientX - startX > deltaMove) {
        callback(false);
        deleteMoveTouch();
      }
    };

    const listenerMouse = (event: MouseEvent) => {
      if (ref.current && ref.current.contains(event.target as Node | null)) {
        startX = event.clientX;
        document.addEventListener("mousemove", moveMouse);
        document.addEventListener("mouseup", deleteMoveMouse);
      }
    };
    const listenerTouch = (event: TouchEvent) => {
      if (ref.current && ref.current.contains(event.target as Node | null)) {
        startX = event.targetTouches[0].clientX;
        document.addEventListener("touchmove", moveTouch);
        document.addEventListener("touchend", deleteMoveTouch);
      }
    };

    document.addEventListener("mousedown", listenerMouse);
    document.addEventListener("touchstart", listenerTouch);

    return () => {
      document.removeEventListener("mousedown", listenerMouse);
      document.removeEventListener("touchstart", listenerTouch);
      document.removeEventListener("mouseup", deleteMoveMouse);
      document.removeEventListener("touchend", deleteMoveTouch);
    };
  }, [ref, callback]);
};
