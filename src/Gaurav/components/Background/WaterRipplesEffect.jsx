// WaterRipples.jsx
import React, { useEffect, useRef } from 'react';

const WaterRipples = () => {
  const canvasRef = useRef();
  const waves = [];

  class Wave {
    constructor() {
      this.x = Math.random() * window.innerWidth;
      this.y = Math.random() * window.innerHeight;
      this.radius = Math.random() * 50 + 20;
      this.speed = Math.random() * 1 + 0.1;
      this.alpha = Math.random() * 0.2 + 0.1;
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0, 150, 255, ${this.alpha})`;
      ctx.lineWidth = 3;
      ctx.stroke();
      this.radius += this.speed;
    }
  }

  const createWaves = () => {
    if (waves.length < 30) waves.push(new Wave());
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const drawWaterRipples = () => {
      ctx.clearRect(0, 0, width, height);
      createWaves();
      waves.forEach((wave, index) => {
        wave.draw(ctx);
        if (wave.radius > 200) waves.splice(index, 1);
      });
      requestAnimationFrame(drawWaterRipples);
    };

    drawWaterRipples();
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 z-[-1]" />;
};

export default WaterRipples;
