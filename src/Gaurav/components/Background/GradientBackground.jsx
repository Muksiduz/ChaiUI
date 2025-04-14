
import React, { useEffect, useState } from 'react';

const GradientBackground = () => {
  const [gradient, setGradient] = useState('linear-gradient(45deg, #ff007f, #00c6ff)'); // Initial gradient (Pink to Blue)

  useEffect(() => {
    const changeGradient = () => {
      setGradient('linear-gradient(45deg, #ff007f, #00c6ff)'); // Pink to Blue
    };

 
    changeGradient();

    
    const interval = setInterval(changeGradient, 5000);

    return () => clearInterval(interval);
  }, []);

  const backgroundStyle = {
    height: '100vh',
    background: gradient,
    backgroundSize: '400% 400%', 
    animation: 'gradientMove 5s ease infinite', 
  };

  const keyframesStyle = `
    @keyframes gradientMove {
      0% {
        background-position: 0% 50%;
      }
      100% {
        background-position: 100% 50%;
      }
    }
  `;

  return (
    <div>
      <style>{keyframesStyle}</style> {}
      <div style={backgroundStyle}></div> {}
    </div>
  );
};

export default GradientBackground;
