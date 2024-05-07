import React from 'react'
import Navbar from '../Navbar'
import Course1 from './course1'
import Footer from '../Footer'
function Course() {
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen'>
        <Course1/>
      </div>
      <Footer/>
    </div>
  )
}

export default Course
