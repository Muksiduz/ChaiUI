// FluidSimulation.jsx
import React, { useEffect, useRef } from 'react';

const Fluid = () => {
  const canvasRef = useRef();

  class ParticleFlow {
    constructor() {
      this.x = Math.random() * window.innerWidth;
      this.y = Math.random() * window.innerHeight;
      this.size = Math.random() * 30 + 5;
      this.speedX = Math.random() * 0.5 - 0.25;
      this.speedY = Math.random() * 0.5 - 0.25;
      this.color = 'rgba(255, 165, 0, 0.6)';
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > window.innerWidth) this.speedX = -this.speedX;
      if (this.y < 0 || this.y > window.innerHeight) this.speedY = -this.speedY;
    }
  }

  const fluidParticles = [];

  const createFluidParticles = () => {
    if (fluidParticles.length < 50) fluidParticles.push(new ParticleFlow());
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const drawFluidSimulation = () => {
      ctx.clearRect(0, 0, width, height);
      createFluidParticles();
      fluidParticles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });
      requestAnimationFrame(drawFluidSimulation);
    };

    drawFluidSimulation();
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 z-[-1]" />;
};

export default Fluid;
