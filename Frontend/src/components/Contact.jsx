import React from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import {useForm} from "react-hook-form"
import { Link } from "react-router-dom";

function Contact() {
    const {
    register,
    handleSubmit,
    formState: {errors}
  }=useForm();

  const onSubmit=(data)=>console.log(data);
  return (
    <div>
      <Navbar />
      <div className="flex h-screen items-center justify-center shadow-md p-5 dark:text-black">
        <div className="modal-box  border-[4px] p-5">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg align-middle">Contact Us</h3>
            {/* Email Name*/}
            <div className="pt-4">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your Name"
                {...register("name", { required: true })}
                className="w-80  px-3 py-1 border-rounded-md "
              />
              <br />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="py-0">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                {...register("email", { required: true })}
                className="w-80  px-3 py-1 border-rounded-md "
              />
              <br />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            {/* Password */}
            <div>
              <span>Message</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your Message"
                {...register("message", { required: true })}
                className="w-80  px-3 py-1 border-rounded-md "
              />
              <br />
              {errors.message && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            {/* Button */}
            <div className="text-center mt-2 display-flex justify-around">
              <Link to="/" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300">
                Submit
              </Link>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
