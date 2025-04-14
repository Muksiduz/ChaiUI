import React from 'react'
import {toggleDarkMode} from  '../toggle.js'

const Card1 = () => {
  return (
    <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
      <div>
        <span 
        onClick={()=>{
            toggleDarkMode()
        }}
        className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
      </div>
      <h3 className="text-gray-900 dark:text-white mt-5 text-base sm:text-lg font-medium tracking-tight">
        Writes upside-down
      </h3>
      <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm sm:text-base">
        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
      </p>
    </div>
  )
}

export default Card1
