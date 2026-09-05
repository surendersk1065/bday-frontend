import { useNavigate } from 'react-router-dom';
import React from 'react'

const M4 = ({ memory }) => {
  const navigate = useNavigate()

  if (!memory) return null

  return (
    <div className="w-full text-center">
      <div key={memory._id} className="flex flex-col items-center gap-6">
        {/* Memory Image and Description Container */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full">
          <img
            src={memory.imgid}
            alt="Memory"
            className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-sm h-auto object-cover shadow-xl"
          />
          <p className="italic text-base sm:text-lg md:text-xl text-white max-w-xs leading-relaxed">
            "{memory.desc}"
          </p>
        </div>

        {/* Navigation Action Button */}
        <button
          className="w-fit px-8 py-3 bg-pink-800 hover:bg-pink-900 text-white font-medium mt-4 sm:mt-6 rounded-2xl shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105"
          onClick={() => navigate('/memories/5')}
        >
          Next Uh !!!
        </button>
      </div>
    </div>
  )
}

export default M4