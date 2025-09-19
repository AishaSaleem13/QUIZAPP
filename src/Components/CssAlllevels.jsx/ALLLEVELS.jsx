import React from 'react'
import { Link } from 'react-router-dom'
import pic1 from '../../assets/Pictures/1.jpg'

function ALLLEVELS() {
  return (
   
       <Link to={
      '/Csslevels'
    }>
      <div className='  bg-gray-400 max-w-[350px] mt-20 mx-1  rounded-3xl py-18'>
     
     <p className='absolute  text-white  tracking-normal font-semibold text-md  left-6 top-[88px]'>1/3 ★</p>
      <h2 className='absolute  text-white  tracking-wider font-bold text-2xl left-12 top-[136px]' >CSS</h2>
       <p className=" absolute top-44 left-6 text-center text-white text-sm italic">
      ""Without CSS, the web is just<br/> plain text."
          </p>
          <img src={pic1} alt="" 
          className='absolute  rounded-3xl md:bottom-[348px] h-36 w-36 md:left-[212px] left-[208px] bottom-[260px]'/>
    </div>
      </Link>
  
   

  
  )
}

export default ALLLEVELS