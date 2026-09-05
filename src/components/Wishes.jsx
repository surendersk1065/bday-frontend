import React from 'react'
import himg3 from '../assets/himg3.png'
import himg5 from '../assets/himg5.png'
import h6 from '../assets/h6.jpeg'
import { Link } from 'react-router-dom'

const Wishes = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center gap-8 md:gap-12 px-4 py-8 text-center">
        {/* Top Feature Image */}
        <div className="flex justify-center">
          <img
            src={himg3}
            alt="Wishes Header"
            className="w-36 sm:w-44 md:w-52 rounded-2xl shadow-2xl object-cover"
          />
        </div>

        {/* Birthday Greeting Message */}
        <div className="flex flex-col gap-4 max-w-4xl px-2">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[#FFF4F4]">
            Many More Happy Returns of the Day Sowwww uh
          </h1>
          <p className="text-3xl sm:text-4xl md:text-5xl">🥳🥳🎁🎁🎈🎈</p>
        </div>

        {/* Subtitle Prompt */}
        <p className="text-sm sm:text-base md:text-lg text-[#FFF4F4]/90 max-w-md">
          Shall we see Something? Click on below sections for some surprises...
        </p>

        {/* Surprise Navigation Cards */}
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 mt-2">
          {/* Memories Card */}
          <Link to="/memories" className="group">
            <div className="cursor-pointer group-hover:-translate-y-2 transition-all duration-300 flex flex-col items-center gap-3">
              <img
                src={h6}
                alt="Our Memories"
                className="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 rounded-full object-cover shadow-lg group-hover:shadow-pink-500/30 transition-all duration-300"
              />
              <p className="font-semibold text-base sm:text-lg text-white group-hover:text-pink-300 transition-colors">
                Our Memories
              </p>
            </div>
          </Link>

          {/* Short Message Card */}
          <Link to="/message" className="group">
            <div className="cursor-pointer group-hover:-translate-y-2 transition-all duration-300 flex flex-col items-center gap-3">
              <img
                src={himg5}
                alt="A short Message"
                className="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 rounded-full object-cover shadow-lg group-hover:shadow-pink-500/30 transition-all duration-300"
              />
              <p className="font-semibold text-base sm:text-lg text-white group-hover:text-pink-300 transition-colors">
                A short Message
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Wishes