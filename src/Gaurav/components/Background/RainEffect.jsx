// RainEffect.jsx
import React, { useEffect, useRef } from "react";

const RainEffect = () => {
  const canvasRef = useRef();
  const drops = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const initRain = () =>
      Array.from({ length: 300 }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        len: Math.random() * 20 + 10,
        speed: Math.random() * 0.2 + 0.05,
      }));

    drops.current = initRain();

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.2)";
      ctx.fillRect(0, 0, width, height);
      ctx.strokeStyle = "#0ff";
      ctx.lineWidth = 1;

      for (let drop of drops.current) {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.len);
        ctx.stroke();

        drop.y += drop.speed;
        if (drop.y > height) drop.y = -drop.len;
      }

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 z-[-1]"
      style={{ width: "100%", height: "100%", background: "black" }}
    />
  );
};

export default RainEffect;
