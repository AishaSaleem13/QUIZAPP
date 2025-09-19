import React from 'react'
import { Link } from 'react-router-dom'
import pic1 from '../../assets/Pictures/1.jpg'
function AllLevels() {
  return (
    <>
   
    
       <Link to={
      '/Htmllevels'
    }>
      <div className='  bg-gray-400 max-w-[350px] mt-20 mx-1  rounded-3xl py-18'>
     
     <p className='absolute  text-white  tracking-normal font-semibold text-md  left-6 top-[88px]'>1/3 ★</p>
      <h2 className='absolute  text-white  tracking-wider font-bold text-xl left-12 top-[136px]' >HTML</h2>
       <p className=" absolute top-44 left-6 text-center text-white text-sm italic">
      "Every pixel starts with a tag."
          </p>
          <img src={pic1} alt="" 
          className='absolute  rounded-3xl md:bottom-[348px] h-36 w-36 md:left-[212px] left-[208px] bottom-[260px]'/>
    </div>
      </Link>
  
   
    </>
  
  )
}

export default AllLevels