import React from 'react'
import mountainImage from '../../assets/mountains.jpg' // Adjust path if needed

const FixedBackgroundSection = () => {

  const types = ['fixed','local','scroll']

  return (
    <div
      className={`bg-${types[0]} bg-cover bg-center min-h-screen flex opacity-0.4 items-center justify-center text-white`}
      style={{ backgroundImage: `url(${mountainImage})` }}
    >
      <div className="bg-transparent bg-opacity-60 p-10 rounded-lg max-w-xl text-center mx-4">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6">
          Welcome to the Mountains
        </h1>
        <p className="text-base md:text-lg font-semibold leading-[1.9] text-white mb-6">
          My trip to the summit <br />
          <span className="text-sm font-medium italic">
            November 16, 2021 · 4 min read
          </span>
          <br /><br />
          Maybe we can live without libraries, people like you and me. Maybe.
          Sure, we're too old to change the world, but what about that kid,
          sitting down, opening a book, right now, in a branch at the local
          library and finding drawings of pee-pees and wee-wees on the Cat in
          the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
          <br /><br />
          Look. If you think this is about overdue fines and missing books,
          you'd better think again. This is about that kid's right to read a
          book without getting his mind warped!
          <br /><br />
          Maybe we can live without libraries, people like you and me. Maybe.
          Sure, we're too old to change the world, but what about that kid,
          sitting down, opening a book, right now, in a branch at the local
          library and finding drawings of pee-pees and wee-wees on the Cat in
          the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
          <br /><br />
          <br /><br />
          Maybe we can live without libraries, people like you and me. Maybe.
          Sure, we're too old to change the world, but what about that kid,
          sitting down, opening a book, right now, in a branch at the local
          library and finding drawings of pee-pees and wee-wees on the Cat in
          the Hat and the Five Chinese Brothers? Doesn't HE deserve better?
          <br /><br />
        </p>
        <button className="mt-4 px-6 py-2 bg-indigo-500 hover:bg-indigo-600 rounded shadow font-semibold transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default FixedBackgroundSection
