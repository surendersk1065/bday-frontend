import React, { useState } from 'react'
import l from '../assets/l.jpeg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

        const [pass,setPass] = useState("") 
        const [err,setErr] = useState(false)
        const navigate = useNavigate()
        const handleLogin = async () => {
            try{
                const response = await axios.post("http://localhost:5000/login",{pass:pass})
                if(response.data.success){
                    sessionStorage.setItem("isLoggedIn", "true")    
                    navigate("/home")
                }
            }
            catch(err){
                if(err.response){
                    console.log(err.response.data.message)
                    setErr(true)
                }
                else{
                    console.log("something went wrong")
                }
            }
        }

  return (
    <div className='h-screen flex flex-col justify-center items-center gap-16'>
        <div className=''>
            <img src={l} alt="" className='w-60'/>
        </div>
        <h1 className='font-semibold'>Hi There! Hope u Know the password click Ok after Entering the password😉</h1>
        <input type="text" value={pass} className='border rounded-lg p-1' onChange={(e) => setPass(e.target.value)}/>
        {err && <p className='text-red-800'>Wrong Password try again You know that</p>}
        <button className='bg-pink-800 px-4 py-2 rounded-lg shadow-2xl cursor-pointer' onClick={handleLogin}>Okie uh !!!</button>
 
    </div>
  )
}

export default Login