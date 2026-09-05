import React, { useState } from 'react'
import l from '../assets/l.jpeg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [pass, setPass] = useState("") 
  const [err, setErr] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault() 
    setLoading(true)
    setErr(false)

    try {
      const response = await axios.post("https://bday-backend-f6kc.onrender.com/login", { pass })
      
      if (response.data.success) {
        sessionStorage.setItem("isLoggedIn", "true")    
        navigate("/home")
      }
    } catch (err) {
      if (err.response) {
        console.log(err.response.data.message)
        setErr(true)
      } else {
        console.log("Something went wrong")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-8 px-4 text-center py-8">
      <div>
        <img src={l} alt="Login Banner" className="w-48 sm:w-60 h-auto object-contain" />
      </div>

      <h1 className="font-semibold text-lg sm:text-xl max-w-md">
        Hi There! Hope u Know the password click Ok after Entering the password😉
      </h1>

      <form onSubmit={handleLogin} className="flex flex-col items-center gap-4 w-full max-w-xs">
        <input 
          type="text" 
          value={pass} 
          className="border rounded-lg p-2.5 w-full text-center focus:outline-none focus:ring-2 focus:ring-pink-800" 
          onChange={(e) => setPass(e.target.value)}
          placeholder="Enter password..."
          required
        />

        {err && <p className="text-red-800 font-medium text-sm">Wrong Password try again You know that</p>}

        <button 
          type="submit"
          disabled={loading}
          className={`px-6 py-2.5 rounded-lg shadow-2xl font-semibold text-white transition-all duration-300 ${
            loading 
              ? 'bg-pink-500 cursor-not-allowed opacity-80' 
              : 'bg-pink-800 hover:bg-pink-900 cursor-pointer hover:scale-105'
          }`}
        >
          {loading ? 'Waking up server...' : 'Okie uh !!!'}
        </button>
      </form>
    </div>
  )
}

export default Login