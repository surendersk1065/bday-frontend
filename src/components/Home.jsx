import React from 'react'
import himg from '../assets/himg.png'
import himg2 from '../assets/himg2.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="min-h-screen text-center flex flex-col justify-center items-center gap-8 md:gap-16 p-4 py-8">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FFF4F4] max-w-4xl leading-tight">
          A Little Surprise for My Favourite Person
        </h1>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 w-full max-w-5xl">
          {/* Left Image */}
          <img
            src={himg}
            alt="Surprise Left"
            className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-contain"
          />

          {/* Center Card */}
          <div className="bg-[#FFF4F4] text-pink-800 p-6 sm:p-10 md:p-12 rounded-3xl shadow-2xl w-full max-w-sm sm:max-w-md flex flex-col justify-center gap-6">
            <p className="font-bold text-lg sm:text-xl">
              Are You Ready for the Surprise Sow!!!
            </p>

            <div className="flex justify-around items-center text-white gap-4">
              {/* Yes Button */}
              <Link to="/wishes">
                <button className="bg-pink-800 hover:bg-pink-900 transition-colors px-5 sm:px-6 py-2.5 rounded-lg shadow-xl cursor-pointer font-medium">
                  Yes uh!
                </button>
              </Link>

              {/* Playful 'No' Hover Button */}
              <div className="group">
                <Link to="/wishes">
                  <button className="group relative bg-pink-800 hover:bg-pink-900 transition-colors text-white px-5 sm:px-6 py-2.5 rounded-lg shadow-lg overflow-hidden cursor-pointer font-medium">
                    <span className="block transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:-translate-y-2">
                      No uh !
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-2 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                      Yes!🤣
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <img
            src={himg2}
            alt="Surprise Right"
            className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-contain"
          />
        </div>
      </div>
    </>
  )
}

export default Home