import React from 'react'
import Login from './Login'
import {useForm} from "react-hook-form"
import { Link } from 'react-router-dom'
function Signup() {
  const {
    register,
    handleSubmit,
    formState: {errors}
  }=useForm();

  const onSubmit=(data)=>console.log(data);
  return (
    <div className='flex h-screen items-center justify-center shadow-md p-5'>
      

  <div className="modal-box  border-[4px] p-5">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
     
      <Link  to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    <h3 className="font-bold text-lg align-middle">SIGN UP</h3>
    {/* Email Name*/}
    <div className='pt-4'>
      <span>Name</span>
      <br />
      <input type='text' placeholder='Enter Your Name' {...register("name", { required: true })}  className='w-80  px-3 py-1 border-rounded-md '/>
      <br />
      {errors.name && <span className='text-red-500'>This field is required</span>}
    </div>
    <div className='py-0'>
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
      <input type='text' placeholder='Enter Your Password' {...register("password", { required: true })} className='w-80  px-3 py-1 border-rounded-md '/>
      <br />
      {errors.password && <span className='text-red-500'>This field is required</span>}
    </div>
    {/* Button */}
    <div className='text-center mt-2 display-flex justify-around'>
      <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300' >Signup</button>
      <p className='mt-4'>Have Account ? {" "}
      <button onClick={()=>document.getElementById("my_modal_3").showModal()} className='underline text-blue-600 cursor-pointer'> Login</button>{" "}<Login/></p>
    </div>
    </form>
  
    
  </div>

    </div>
  )
}

export default Signup
