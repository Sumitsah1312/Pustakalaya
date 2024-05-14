import React from 'react'
import { useAuth } from '../context/AuthProvider'
// import User from '../../../Backend/Model/user.model'
import toast from 'react-hot-toast'
function Logout() {
    const [authuser,setAuthUser]=useAuth()
    const handleLogout=()=>{
        try {
            setAuthUser({
                ...authuser,
                user:null
            })
            localStorage.removeItem("Users")
            toast.success("Logout Successfully")
            window.location.reload()
            
        } catch (error) {
            
            toast.error("Error : ",error.message)
        }
    }
  return (
    <div>
      <button onClick={handleLogout} className='px-3 py-2 bg-red-400 text-white rounded-md cursor-pointer'>
        Logout
      </button>
    </div>
  )
}

export default Logout
