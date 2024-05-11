import React from 'react'
import Home from '././components/home/Home'
import Signup from '././components/Signup'
import Course from './components/courses/Course'
import Contact from './components/Contact'
import { Routes,Route } from 'react-router-dom' 
import {Toaster} from "react-hot-toast"
import { useAuth } from './context/AuthProvider'
import { Navigate } from 'react-router-dom'
function App() {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser);
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      {/* <Home/>
      <Course/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={authUser?<Course/>:<Navigate to="/signup"/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Toaster/>
    </div>
    </>

  )
}

export default App
