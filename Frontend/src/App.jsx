import React from 'react'
import Home from '././components/home/Home'
import Course from './components/courses/Course'
import { Routes,Route } from 'react-router-dom' 
function App() {
  return (
    <div>
      {/* <Home/>
      <Course/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Course/>}/>
      </Routes>
      
    </div>
  )
}

export default App
