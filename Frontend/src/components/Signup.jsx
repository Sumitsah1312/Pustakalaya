import React from 'react'

function Signup() {
  return (
    <div className='flex h-screen item-center justify-center border-[2px] shadow-md p-5'>
      

  <div className="modal-box">
    <form method="dialog">
     
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg align-middle">SIGN UP</h3>
    {/* Email */}
    <div className='py-4'>
      <span>Name</span>
      <br />
      <input type='text' placeholder='Enter Your Name' className='w-80  px-3 py-1 border-rounded-md '/>
    </div>
    <div className='py-4'>
      <span>Email</span>
      <br />
      <input type='email' placeholder='Enter Your Email' className='w-80  px-3 py-1 border-rounded-md '/>
    </div>
  {/* Password */}
    <div >
      <span>PassWord</span>
      <br />
      <input type='text' placeholder='Enter Your Password' className='w-80  px-3 py-1 border-rounded-md '/>
    </div>
    {/* Button */}
    <div className='text-center mt-2 display-flex justify-around'>
      <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300' >Signup</button>
      <p className='mt-4'>Have Account ? <span className='underline text-blue-600 cursor-pointer'> Login</span></p>
    </div>
  
    
  </div>

    </div>
  )
}

export default Signup
