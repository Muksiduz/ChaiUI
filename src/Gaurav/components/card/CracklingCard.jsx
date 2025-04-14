import React from 'react'

const CracklingCard = () => {
  return (
    <>
      <div className="relative p-[3px] rounded-xl w-[300px] h-[200px] animate-border overflow-hidden">
        <div className="bg-white w-full h-full rounded-xl flex flex-col items-center justify-center text-center text-black px-4 py-6">
          <h2 className="text-xl font-bold mb-2">Crackling Border</h2>
          <p className="text-sm">This card has a sparkly moving border!</p>
        </div>
      </div>

      {/* Custom animation styling directly inside the component */}
      <style>{`
        @keyframes crackle-border {
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

        .animate-border {
          background: linear-gradient(
            270deg,
            #ff00c8,
            #00ffff,
            #ff9900,
            #ff00c8
          );
          background-size: 600% 600%;
          animation: crackle-border 4s linear infinite;
        }
      `}</style>
    </>
  )
}

export default CracklingCard
