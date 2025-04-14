// NeonGridEffect.jsx
import React, { useEffect, useRef } from 'react';

const NeonGridEffect = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let time = 0;
    const gridSize = 40;
    const lineColor = 'rgba(0, 255, 255, 0.2)'; // Darker neon grid lines

    const drawGrid = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = lineColor; // Applying darker color
      ctx.lineWidth = 1;

      for (let x = gridSize; x < width; x += gridSize) {
        for (let y = gridSize; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x + Math.sin(time * 0.2) * 10, y);
          ctx.lineTo(x, y + Math.cos(time * 0.3) * 10);
          ctx.stroke();
        }
      }

      time += 0.1;
      requestAnimationFrame(drawGrid);
    };

    drawGrid();
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 z-[-1]" />;
};

export default NeonGridEffect;
