import React from 'react'

const Transition = () => {
  return (
    <div className="flex  items-center gap-6 mt-10">
      <button className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow-md transition duration-150 ease-in-out hover:bg-indigo-600 hover:scale-105">
        Button A - Fast
      </button>
      
      <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-green-600 hover:scale-105">
        Button B - Medium
      </button>
      
      <button className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-md transition duration-700 ease-in-out hover:bg-pink-600 hover:scale-105">
        Button C - Slow
      </button>
    </div>
  )
}

export default Transition
