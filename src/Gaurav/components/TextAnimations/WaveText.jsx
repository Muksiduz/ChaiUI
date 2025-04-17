import React from "react";

const WaveText = () => {
  const text = "Wavy ChaiUI";

  return (
    <div className="flex items-center justify-center w-full h-screen bg-black">
      <h1 className="text-5xl font-bold text-white flex gap-1">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="inline-block"
            style={{
              animation: "wave 1.2s ease-in-out infinite",
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {char}
          </span>
        ))}
      </h1>

      <style>
        {`
          @keyframes wave {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }
        `}
      </style>
    </div>
  );
};

export default WaveText;
