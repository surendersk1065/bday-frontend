import React, { useEffect, useState } from "react"
import axios from "axios"
import m1 from '../assets/m1.png'
import m2 from '../assets/m2.png'
import m3 from '../assets/m3.png'
import m4 from '../assets/m4.png'
import { Link } from "react-router-dom"

const Message = () => {
    const [message, setMessage] = useState("")
    const [load, setLoad] = useState(true)

    useEffect(() => {
        const getMessage = async () => {
            try {
                const response = await axios.get(
                    "https://bday-backend-f6kc.onrender.com/message"
                )

                if (response.data.success) {
                    setMessage(response.data.message)
                    setLoad(false)
                }
            } catch (err) {
                console.log(err)
            }
        }

        getMessage()
    }, [])

    return (
        <div className="min-h-screen flex flex-col justify-between items-center gap-6 px-4 py-8 max-w-6xl mx-auto">
            {/* Top Row Images */}
            <div className="flex justify-between items-center w-full">
                <img src={m1} alt="Decoration Left Top" className="w-52 sm:w-32 md:w-72 lg:w-96 h-auto object-contain" />
                <img src={m3} alt="Decoration Right Top" className="w-52 sm:w-32 md:w-72 lg:w-96 h-auto object-contain" />
            </div>

            {/* Message Card */}
            <div className="bg-[#FFF4F4]/70 text-pink-800 p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl text-center w-full max-w-2xl mx-auto my-auto backdrop-blur-sm">
                <p className="font-extrabold text-xl sm:text-2xl mb-4 sm:mb-6">A Short message for u uh!!!</p>
                {load ? (
                    <p className="text-base sm:text-lg animate-pulse font-medium">Loading message...</p>
                ) : (
                    <h1 className="text-base sm:text-lg md:text-xl font-medium leading-relaxed italic text-pink-900">
                        {message}
                    </h1>
                )}
            </div>

            {/* Bottom Row Images + Next Button */}
            <div className="flex justify-between items-center w-full gap-2">
                <img src={m2} alt="Decoration Left Bottom" className="w-42 sm:w-32 md:w-72 lg:w-96 h-auto object-contain" />
                
                <Link to="/final" className="shrink-0">
                    <p className="bg-pink-800 hover:bg-pink-900 text-white font-medium px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105 text-sm sm:text-base">
                        Next uh !!!
                    </p>
                </Link>

                <img src={m4} alt="Decoration Right Bottom" className="w-42 sm:w-32 md:w-72 lg:w-96 h-auto object-contain" />
            </div>
        </div>
    )
}

export default Message