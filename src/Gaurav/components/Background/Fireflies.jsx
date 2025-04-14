// Fireflies.jsx
import React, { useEffect, useRef } from "react";

const Fireflies = () => {
  const canvasRef = useRef();
  const fireflies = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const initFireflies = () =>
      Array.from({ length: 100 }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random(),
        delta: Math.random() * 0.02,
      }));

    fireflies.current = initFireflies();

    const draw = () => {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);

      for (let f of fireflies.current) {
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.radius, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255,255,200,${f.opacity})`;
        ctx.fill();

        f.x += f.dx;
        f.y += f.dy;
        f.opacity += f.delta;

        if (f.opacity <= 0 || f.opacity >= 1) f.delta *= -1;
        if (f.x < 0 || f.x > width) f.dx *= -1;
        if (f.y < 0 || f.y > height) f.dy *= -1;
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

export default Fireflies;
