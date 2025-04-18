

import React, { useEffect, useState } from 'react';

const BirthdayStringsEffect = () => {
  const [strings, setStrings] = useState([]);

  useEffect(() => {
    const generateStrings = () => {
      // Generate random strings
      const newStrings = Array.from({ length: 10 }).map(() => ({
        id: Math.random(),
        positionX: Math.random() * window.innerWidth, // Random X position
        positionY: -100, // Start from above the screen
        animationDuration: `${Math.random() * 2 + 3}s`, // Random duration for falling
        animationDelay: `${Math.random() * 2}s`, // Random delay
        rotation: `${Math.random() * 360}deg`, // Random rotation for effect
      }));
      setStrings(newStrings);
    };

    // Generate strings every 2 seconds
    const interval = setInterval(generateStrings, 2000);
    
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div>
      <div style={styles.container}>
        {strings.map((string) => (
          <div
            key={string.id}
            style={{
              ...styles.string,
              left: string.positionX,
              animationDuration: string.animationDuration,
              animationDelay: string.animationDelay,
              transform: `rotate(${string.rotation})`,
            }}
          ></div>
        ))}
      </div>
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
          }
          100% {
            transform: translateY(${window.innerHeight + 100}px) rotate(360deg);
          }
        }
        .string {
          position: absolute;
          width: 2px;
          height: 30px;
          background: linear-gradient(45deg, #ff007f, #00c6ff);
          animation: fall linear infinite;
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    pointerEvents: 'none',
  },
  string: {
    position: 'absolute',
    width: '2px',
    height: '30px',
    background: 'linear-gradient(45deg, #ff007f, #00c6ff)', // String colors (Pink to Blue)
    animation: 'fall linear infinite',
  },
};

export default BirthdayStringsEffect;
