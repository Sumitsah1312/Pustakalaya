import React from 'react'
import list from "../../../public/list.json"
import Card from "../Card"
import { Link } from 'react-router-dom'
function course1() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='pt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>We are delighted to see you <span className='text-pink-500'>here :)</span></h1>
        <p className='pt-12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius id repudiandae non aspernatur eligendi in voluptates veritatis, nihil libero nemo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque at impedit sequi iusto praesentium modi, asperiores saepe sed quis est? labore facere?</p>
        <Link to="/">
        <button className='mt-5 bg-pink-500 text-white px-4 -y-4 rounded-md hover:bg-pink-700 duration-700 hover:scale-105 '>Back</button>
        </Link>
      </div>
      
        
          <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            list.map((item)=>(
              <Card item={item} key={item.id}/>
            ))
          }
          </div>
        
      
    </div>
    </>
  )
}

export default course1
