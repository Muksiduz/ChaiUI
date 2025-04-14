import React from 'react'

const RainbowButton = () => {
  return (
    <>
      <style>
        {`
          .rainbow-border {
            position: relative;
            display: inline-block;
            padding: 4px; /* extra space for rainbow border */
            border-radius: 9999px;
            background: linear-gradient(270deg, red, orange, yellow, green, blue, indigo, violet, red);
            background-size: 400% 400%;
            animation: rainbowMove 4s linear infinite;
          }

          @keyframes rainbowMove {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 100% 50%;
            }
          }

          .rainbow-button {
            position: relative;
            background-color: white;
            color: black;
            padding: 0.75rem 2rem;
            border-radius: 9999px;
            font-weight: 700;
            font-size: 1rem;
            z-index: 1;
            transition: background-color 0.3s ease;
          }

          .rainbow-border::before {
            content: '';
            position: absolute;
            top: -4px;
            left: -4px;
            right: -4px;
            bottom: -4px;
            border-radius: 9999px;
            background: inherit;
            z-index: -1;
          }

          .rainbow-button:hover {
            background-color: #f3f4f6; /* light gray on hover */
          }
        `}
      </style>

      <div className="rainbow-border">
        <button className="rainbow-button">
          Rainbow Border
        </button>
      </div>
    </>
  )
}

export default RainbowButton
