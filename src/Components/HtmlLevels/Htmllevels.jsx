import React from 'react'

import { Link } from 'react-router-dom';
function Htmllevelss() {
  return (
    <div className="min-h-screen bg-[#ecbcfd] flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row md:justify-center gap-6 w-full max-w-5xl">

        {/* Easy Level */}
        <Link to={'/htmlEasy'}>
        <div className="bg-[#caffbf] w-full sm:max-w-[12rem] md:max-w-[14rem] rounded-2xl border-[6px] border-[#88c46c] p-6 shadow-xl hover:scale-105 transition duration-300">
          <h2 className="text-green-900 font-bold text-xl text-center mb-4 bg-[#eaffd0] py-2 rounded">
            ✨ Easy
          </h2>
          <p className="text-center text-green-800 font-medium">Perfect for beginners!</p>
        </div></Link>

        {/* Medium Level */}
        <Link to={"/htmlMedium"}>
        <div className="bg-[#ffd6a5] w-full sm:max-w-[12rem] md:max-w-[14rem] rounded-2xl border-[6px] border-[#f4a261] p-6 shadow-xl hover:scale-105 transition duration-300">
          <h2 className="text-orange-800 font-bold text-xl text-center mb-4 bg-[#ffeccc] py-2 rounded">
            🧠 Medium
          </h2>
          <p className="text-center text-orange-900 font-medium">For growing minds!</p>
        </div>
</Link>
<Link to={'/htmlHard'}>
        <div className="bg-[#ffadad] w-full sm:max-w-[12rem] md:max-w-[14rem] rounded-2xl border-[6px] border-[#dd2d4a] p-6 shadow-xl hover:scale-105 transition duration-300">
          <h2 className="text-red-900 font-bold text-xl text-center mb-4 bg-[#ffe3e3] py-2 rounded">
            🔥 Hard
          </h2>
          <p className="text-center text-red-800 font-medium">Ready for a challenge?</p>
        </div></Link>

      </div>
    </div>
  );
}

export default Htmllevelss
