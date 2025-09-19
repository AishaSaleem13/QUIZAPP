import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../assets/Pictures/1.jpg';
import pic2 from '../assets/Pictures/2.jpg';

function Homee() {
  return (
    <div className='bg-[#ecbcfd] min-h-screen flex flex-col items-center py-10'>

      {/* HTML Card */}
      <Link to='/Htmllevels'>
        <div className='bg-gray-400 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mt-10 mx-2 rounded-3xl px-6 py-4 hover:scale-105 transition-transform'>

          <div className='flex flex-wrap items-center justify-between gap-4'>

            {/* Text content */}
            <div className='flex-1 min-w-[150px]'>
              <p className='text-white tracking-normal font-semibold text-md mb-1'>1/3 ★</p>
              <h2 className='text-white tracking-wider font-bold text-xl mb-1'>HTML</h2>
              <p className="text-white text-sm italic">
                "Every pixel starts with a tag."
              </p>
            </div>

            {/* Image */}
            <img
              src={pic1}
              alt="HTML"
              className='rounded-3xl h-24 w-24 object-cover'
            />

          </div>
        </div>
      </Link>

      {/* CSS Card */}
      <Link to='/Csslevels'>
        <div className='bg-[#656d4a] w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mt-10 mx-2 rounded-3xl px-6 py-4 hover:scale-105 transition-transform'>

          <div className='flex flex-wrap items-center justify-between gap-4'>

            {/* Text content */}
            <div className='flex-1 min-w-[150px]'>
              <p className='text-white tracking-normal font-semibold text-md mb-1'>1/3 ★</p>
              <h2 className='text-white tracking-wider font-bold text-xl mb-1'>CSS</h2>
              <p className="text-white text-sm italic">
                "Without CSS, the web is just<br className='md:block lg:block hidden' /> plain text."
              </p>
            </div>

            {/* Image */}
            <img
              src={pic2}
              alt="CSS"
              className='rounded-3xl h-24 w-24 object-cover'
            />

          </div>
        </div>
      </Link>

    </div>
  );
}

export default Homee;
