import React, { useRef, useState, useEffect } from 'react'

function Canvas(props) {

  const [isDrawing, setIsDrawing] = useState(false);

  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "green";
    ctx.lineCap = "round";
    ctx.lineWidth = 1;
    ctx.lineJoin = "round";
    ctx.strokeStyle = "black";
    ctxRef.current = ctx;
  }, []);

  const startDrawing = (e) => {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(
        e.nativeEvent.offsetX,
        e.nativeEvent.offsetY
    );
    setIsDrawing(true);
  }
  
  const endDrawing = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = (e) => {
    if (!isDrawing) {
        return;
    }
    ctxRef.current.lineTo(
        e.nativeEvent.offsetX,
        e.nativeEvent.offsetY
    );

    ctxRef.current.stroke();
};

  return (
    <canvas ref={canvasRef} width={`1080px`} height={`720px`} {...props}
      onMouseDown={startDrawing}
      onMouseUp={endDrawing}
      onMouseMove={draw}></canvas>
  )
}

export default Canvas