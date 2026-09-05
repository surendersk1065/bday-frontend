import React, { useState, useEffect } from 'react'
import f1 from '../assets/f1.jpeg'
import s1 from '../assets/s1.jpeg'
import s2 from '../assets/s2.jpeg'
import s3 from '../assets/s3.jpeg'
import s4 from '../assets/s4.jpeg'

const Final = () => {
  const img = [s1, s2, s3, s4]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [timeElapsed, setTimeElapsed] = useState({ days: 0, hours: 0, minutes: 0 })

  // Automatically slide images every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length)
    }, 3000)

    return () => clearInterval(timer) // Cleanup on unmount
  }, [img.length])

  useEffect(() => {
    const birthDate = new Date('2000-09-06T18:00:00')

    const updateTime = () => {
      const now = new Date()
      const diffInMs = now.getTime() - birthDate.getTime()

      if (diffInMs > 0) {
        const totalMinutes = Math.floor(diffInMs / (1000 * 60))
        const totalHours = Math.floor(totalMinutes / 60)

        const days = Math.floor(totalHours / 24)
        const hours = totalHours % 24
        const minutes = totalMinutes % 60

        setTimeElapsed({ days, hours, minutes })
      }
    }

    updateTime()
    const interval = setInterval(updateTime, 60000) // Updates every minute

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-8 text-center px-4 py-8 max-w-5xl mx-auto">
      {/* Bouquet Image */}
      <div className="flex justify-center items-center">
        <img src={f1} alt="Bouquet" className="w-56 sm:w-72 md:w-80 h-auto object-contain" />
      </div>

      {/* Birthday Message */}
      <div className="max-w-3xl">
        <p className="text-xl sm:text-2xl md:text-3xl italic font-medium leading-relaxed">
          Once Again Happy B'day sow uh.., Hope u liked this small surprise from me... Have a great year ahead.😉😉❤️❤️
        </p>
      </div>

      {/* Auto-sliding Image Container */}
      <div className="relative w-72 sm:w-80 md:w-96 overflow-hidden rounded-xl shadow-xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {img.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 flex justify-center">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Time Elapsed Counter */}
      <div className="bg-[#FFF4F4]/80 text-pink-900 p-4 sm:p-6 rounded-2xl shadow-xl max-w-sm sm:max-w-md w-full backdrop-blur-sm border border-pink-200">
        <p className="text-sm sm:text-base font-semibold mb-2 text-pink-700">
          Time elapsed since you were born 🎈
        </p>
        <p className="text-xl sm:text-2xl font-extrabold tracking-wider text-pink-800">
          {timeElapsed.days} days : {timeElapsed.hours}hrs : {timeElapsed.minutes} mins
        </p>
      </div>

      {/* Signing Off Message */}
      <div>
        <p className="text-lg sm:text-xl font-semibold my-2">Signing off Sur uh !!!!</p>
      </div>
    </div>
  )
}

export default Final