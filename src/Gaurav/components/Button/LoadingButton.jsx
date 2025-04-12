import React from 'react'

const LoadingButton = () => {
  return (
    <button
      type="button"
      className="flex items-center px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow-md cursor-not-allowed opacity-75"
      disabled
    >
      <svg
        className="mr-3 w-5 h-5 animate-spin text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M12 2a10 10 0 00-9.95 9h2A8 8 0 0112 4V2z"
        />
      </svg>
      Processing…
    </button>
  )
}

export default LoadingButton
