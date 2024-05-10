import React from 'react'
import {useForm} from "react-hook-form"
import { Link } from 'react-router-dom'
function Login() {

  const {
    register,
    handleSubmit,
    formState: {errors}
  }=useForm();

  const onSubmit=(data)=>console.log(data);

  return (

    <div>
      

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
     
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
    <h3 className="font-bold text-lg align-middle">LOGIN</h3>
    {/* Email */}
    <div className='py-4'>
      <span>Email</span>
      <br />
      <input type='email' placeholder='Enter Your Email' {...register("email", { required: true })} className='w-80  px-3 py-1 border-rounded-md '/>
      <br />
      {errors.email && <span className='text-red-500'>This field is required</span>}
    </div>
  {/* Password */}
    <div >
      <span>PassWord</span>
      <br />
      <input type='password' placeholder='Enter Your Password' {...register("password", { required: true })} className='w-80  px-3 py-1 border-rounded-md '/>
      <br />
      {errors.password && <span className='text-red-500'>This field is required</span>}
    </div>
    {/* Button */}
    <div className='text-center mt-2 display-flex justify-around'>
      <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300' >Login</button>
      <p className='mt-4'>Not Registered ? {" "}<Link to="/signup"className='underline text-blue-600 cursor-pointer'>
         Sign Up
         </Link>
         {" "}</p>
    </div>

    </form>
  
    
  </div>
</dialog>
    </div>
  )
}

export default Login
