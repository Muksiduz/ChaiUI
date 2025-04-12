// ParticleExplosionEffect.jsx

import React, { useEffect, useRef } from 'react';

const ParticleExplosionEffect = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const particles = [];
    const colors = ['#FF6347', '#32CD32', '#1E90FF', '#FF1493', '#FFD700'];
    
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const createParticle = () => ({
      x: width / 2,
      y: height / 2,
      radius: Math.random() * 5 + 1,
      speedX: Math.random() * 6 - 3,
      speedY: Math.random() * 6 - 3,
      color: colors[Math.floor(Math.random() * colors.length)],
    });

    const drawParticles = () => {
      ctx.clearRect(0, 0, width, height);
      particles.push(createParticle());

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        p.x += p.speedX;
        p.y += p.speedY;
        p.radius *= 0.98;

        if (p.radius <= 0.1) particles.splice(i, 1);
      }

      requestAnimationFrame(drawParticles);
    };

    drawParticles();

    return () => {};
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 z-[-1]" />;
};

export default ParticleExplosionEffect;
