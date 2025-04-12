import React, { useEffect, useRef } from "react";

const BubbleEffect = () => {
  const canvasRef = useRef();
  const bubbles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const createBubbles = () =>
      Array.from({ length: 30 }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 40 + 30, // BIG bubbles
        speedY: Math.random() * 0.3 + 0.1,
        speedX: Math.random() * 0.2 - 0.1,
        alpha: Math.random() * 0.3 + 0.1, // low alpha for transparency
      }));

    bubbles.current = createBubbles();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let b of bubbles.current) {
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${b.alpha})`; // white outline
        ctx.lineWidth = 2;
        ctx.stroke();

        b.y -= b.speedY;
        b.x += b.speedX;

        if (b.y + b.radius < 0) {
          b.y = height + b.radius;
          b.x = Math.random() * width;
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      bubbles.current = createBubbles();
    };

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 z-[-1]"
      style={{ width: "100%", height: "100%", background: "#000" }}
    />
  );
};

export default BubbleEffect;
