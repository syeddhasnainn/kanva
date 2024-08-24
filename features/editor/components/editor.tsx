"use client";
import { fabric } from 'fabric';
import { useEditor } from "@/features/editor/hooks/use-editor";
import { useEffect, useRef, useState } from "react";

export default function Editor() {
  const { init } = useEditor();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      controlsAboveOverlay:true,
      preserveObjectStacking: true
    });

    init({
      initialCanvas: canvas,
      initialContainer:containerRef.current! 
    })
  }, [init])


  return (
    <div className='h-full flex flex-col '>
      <div className='flex-1 h-full' ref={containerRef} >
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}