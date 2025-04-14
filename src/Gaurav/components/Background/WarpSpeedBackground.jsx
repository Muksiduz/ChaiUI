import { useEffect, useRef } from "react";

const WarpSpeedBackground = () => {
  const canvasRef = useRef(null);
  const stars = useRef([]);

  const initStars = (count, width, height) => {
    return Array.from({ length: count }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * width,
    }));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let numStars = 500;
    stars.current = initStars(numStars, width, height);

    const draw = () => {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "white";
      for (let i = 0; i < numStars; i++) {
        const star = stars.current[i];

        // Perspective
        const k = 128.0 / star.z;
        const x = star.x * k + width / 2;
        const y = star.y * k + height / 2;

        if (x < 0 || x >= width || y < 0 || y >= height || star.z < 1) {
          // reset star
          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
          star.z = width;
        }

        star.z -= 4;

        ctx.beginPath();
        ctx.arc(x, y, 1, 0, 2 * Math.PI);
        ctx.fill();
      }

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      stars.current = initStars(numStars, width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 z-[-1]"
      style={{ width: "100%", height: "100%", background: "black" }}
    />
  );
};

export default WarpSpeedBackground;
