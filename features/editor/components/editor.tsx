"use client";
import { useEditor } from "@/features/editor/hooks/use-editor";
import { useEffect, useRef } from "react";
// import * as fabric from 'fabric'; // v6

export default function Editor() {
//   const { init } = useEditor();

//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const canvas = new fabric.Canvas(canvasRef.current, {
//     controlsAboveOverlay: true,
//     preserveObjectStacking: true,
//   });

//   useEffect(() => {
//     init({
//       initialCanvas: canvas,
//       initialContainer: containerRef.current,
//     });
//   }, [init]);

  return (
    <main className="h-full flex bg-red-500">
      {/* <div className="flex-1 h-full bg-gray-400 border" ref={containerRef}> */}
        {/* <canvas width={300} height={300} ref={canvasRef} /> */}
        <div className="bg-red-400">hasnain</div>

    </main>
  );
}
