import { useCallback } from "react";
import * as fabric from 'fabric'; // v6

export const useEditor = () => {
  const init = useCallback(
    ({
      initialCanvas,
      initialContainer,
    }: {
      initialCanvas: fabric.Canvas | null;
      initialContainer: HTMLDivElement | null;
    }) => {
      const initialWorkspace = new fabric.Rect({
        width: 900,
        height: 1200,
        name: 'clip',
        fill: 'white',
        selectable:false,
        hasControls:false,
        shadow: new fabric.Shadow({
          color: "rgba(0,0,0,0.8)",
          blur: 5
        }),

      })
      initialCanvas.setWidth(initialContainer.offsetWidth);

      initialCanvas.setHeight(initialContainer.offsetHeight);

      initialCanvas.add(initialWorkspace)
      initialCanvas.centerObject(initialWorkspace)
      initialCanvas.clipPath = initialWorkspace
    },
    []
  );

  return { init };
};
