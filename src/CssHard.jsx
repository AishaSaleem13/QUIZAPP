import React, { useState } from 'react'

function HardCss() {
const cssHardQuestions = [
  {
    question: "What does the 'z-index' property in CSS control?",
    options: [
      "A) The opacity level of an element",
      "B) The layering of elements on the z-axis",
      "C) The zoom level of an element",
      "D) The index of an element in the DOM"
    ],
    correct: "B) The layering of elements on the z-axis"
  },
  {
    question: "Which value of 'position' allows you to position an element relative to its nearest positioned ancestor?",
    options: [
      "A) static",
      "B) fixed",
      "C) absolute",
      "D) sticky"
    ],
    correct: "C) absolute"
  },
  {
    question: "What does 'inherit' do in CSS?",
    options: [
      "A) Resets the value to default",
      "B) Applies the parent element's value",
      "C) Inherits from root always",
      "D) Makes the element invisible"
    ],
    correct: "B) Applies the parent element's value"
  },
  {
    question: "Which pseudo-class targets the first element of its type inside a parent?",
    options: [
      "A) :first-child",
      "B) :first",
      "C) :first-of-type",
      "D) :nth-child(1)"
    ],
    correct: "C) :first-of-type"
  },
  {
    question: "What is the default value of the 'position' property?",
    options: [
      "A) relative",
      "B) static",
      "C) absolute",
      "D) fixed"
    ],
    correct: "B) static"
  },
  {
    question: "What does the 'calc()' function allow in CSS?",
    options: [
      "A) Perform animations",
      "B) Calculate variable names",
      "C) Perform arithmetic in property values",
      "D) Compile SASS code"
    ],
    correct: "C) Perform arithmetic in property values"
  },
  {
    question: "Which property allows flexible width distribution in a flex container?",
    options: [
      "A) flex-grow",
      "B) flex-size",
      "C) flex-stretch",
      "D) justify-content"
    ],
    correct: "A) flex-grow"
  },
  {
    question: "What is the correct use of a CSS variable?",
    options: [
      "A) $main-color: red;",
      "B) --main-color: red;",
      "C) var(main-color: red);",
      "D) set main-color = red;"
    ],
    correct: "B) --main-color: red;"
  },
  {
    question: "What does the 'object-fit: cover;' style do to an image?",
    options: [
      "A) Stretches the image to fit",
      "B) Scales image to cover the element while preserving aspect ratio",
      "C) Repeats image vertically",
      "D) Crops image into square"
    ],
    correct: "B) Scales image to cover the element while preserving aspect ratio"
  },
  {
    question: "Which shorthand property includes margin, border, and padding?",
    options: [
      "A) box-model",
      "B) spacing",
      "C) box",
      "D) No such shorthand exists"
    ],
    correct: "D) No such shorthand exists"
  }
];

function next (){
  setcurrentindex(prev => prev + 1 )
}

const [currentindex,setcurrentindex]=useState(0)
const [count,setcount]=useState(0)
function checking (userAns){
  const correctAnswer=cssHardQuestions[currentindex].correct
  if(userAns===correctAnswer){

setcount(prev => prev+ 1)
  }
setcurrentindex(prev => prev + 1)
}
  return (
 <div className="h-screen bg-[#ecbcfd] flex items-center justify-center">

  {

    currentindex < cssHardQuestions.length ? (
      <>
       <div className="absolute top-10 left-6 text-2xl text-gray-800 font-bold bg-white px-4 py-2 rounded-xl shadow-md">
  Q{currentindex + 1}/20
</div>
      <div className="mt-10 w-full max-w-md space-y-4">
        <div className="bg-zinc-50 border-[6px]  border-[#b07d62] py-24 px-4 rounded-2xl">
        <h2 className="text-2xl text-[#4b2e2e] font-bold text-center mb-4 px-4 py-2 bg-white rounded-lg shadow-sm border border-[#c38e70]">
  {cssHardQuestions[currentindex].question}
</h2>
        </div>
<div className='grid grid-cols-2 gap-4'>
        {cssHardQuestions[currentindex].options.map((option, index) => (
          <button
            key={index}
            onClick={() => checking(option)}
            className="w-full px-4 py-2 bg-gradient-to-r from-[#b07d62] to-[#c38e70] text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"

          >
            {option}
          </button>
          
        ))}
        </div>
        <button onClick={next}  className="w-full px-4 py-2 bg-red-100 text-red-600 font-semibold rounded-xl hover:bg-red-200 transition duration-300"
  >I dont know</button> 
      </div>
      </>
    ) : (
        <h2 className="text-4xl font-bold text-center text-[#9d6b53]">
        Your score is {count}
      </h2>
    )
  }
</div>

  )
}

export default HardCss