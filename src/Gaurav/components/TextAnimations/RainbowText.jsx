import React from "react";

const RainbowText = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-black">
      <h1
        className="text-6xl font-extrabold bg-clip-text text-transparent animate-rainbow"
        style={{
          backgroundImage:
            "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)",
          backgroundSize: "400% 100%",
          animation: "rainbow 5s linear infinite",
        }}
      >
        ChaiUI Rainbow Magic ✨
      </h1>

      <style>
        {`
          @keyframes rainbow {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default RainbowText;
