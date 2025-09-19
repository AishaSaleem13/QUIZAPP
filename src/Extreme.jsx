import React, { useState } from 'react'

function ExtremeCss() {
const cssExtremeQuestions = [
  {
    question: "What will happen if you apply `margin: auto;` to a block element with a fixed width?",
    options: [
      "A) It will align left",
      "B) It will align right",
      "C) It will center horizontally",
      "D) It will stretch full width"
    ],
    correct: "C) It will center horizontally"
  },
  {
    question: "Which of these does NOT trigger a new stacking context in CSS?",
    options: [
      "A) position: absolute with z-index",
      "B) opacity less than 1",
      "C) transform: scale(1)",
      "D) display: inline-block"
    ],
    correct: "D) display: inline-block"
  },
  {
    question: "In a flex container, what happens if 'flex-shrink' is set to 0?",
    options: [
      "A) Items will not grow",
      "B) Items won't shrink if the container gets smaller",
      "C) Items will disappear",
      "D) Items stack vertically"
    ],
    correct: "B) Items won't shrink if the container gets smaller"
  },
  {
    question: "Why would you use `contain: layout style;` on an element?",
    options: [
      "A) To group children as a single paint area",
      "B) To make a container inherit parent's style",
      "C) To apply global containment rules",
      "D) To ensure CSS applies to body only"
    ],
    correct: "A) To group children as a single paint area"
  },
  {
    question: "What will `position: sticky` do if no offset value like `top: 0` is set?",
    options: [
      "A) It behaves like static",
      "B) It behaves like relative",
      "C) It becomes fixed",
      "D) It breaks layout"
    ],
    correct: "B) It behaves like relative"
  },
  {
    question: "Which property defines whether an element is a block formatting context?",
    options: [
      "A) display",
      "B) overflow",
      "C) position",
      "D) float"
    ],
    correct: "B) overflow"
  },
  {
    question: "How can you vertically center an element using only flexbox?",
    options: [
      "A) align-items: center",
      "B) justify-content: center",
      "C) margin: auto 0",
      "D) align-content: center"
    ],
    correct: "A) align-items: center"
  },
  {
    question: "What is the main difference between `em` and `rem`?",
    options: [
      "A) rem is fixed, em is flexible",
      "B) rem is relative to root, em is relative to parent",
      "C) rem is larger always",
      "D) They are interchangeable"
    ],
    correct: "B) rem is relative to root, em is relative to parent"
  },
  {
    question: "What happens if two conflicting CSS rules have equal specificity?",
    options: [
      "A) First rule wins",
      "B) Inline style wins",
      "C) Last rule in order wins",
      "D) Browser chooses randomly"
    ],
    correct: "C) Last rule in order wins"
  },
  {
    question: "Which CSS property can prevent an element from being resized by the user?",
    options: [
      "A) resize: none",
      "B) overflow: hidden",
      "C) user-select: none",
      "D) pointer-events: none"
    ],
    correct: "A) resize: none"
  }
];


const [currentindex,setcurrentindex]=useState(0)
const [count,setcount]=useState(0)
function checking (userAns){
  const correctAnswer=cssExtremeQuestions[currentindex].correct
  if(userAns===correctAnswer){

setcount(prev => prev+ 1)
  }
setcurrentindex(prev => prev + 1)
}
function next (){
  setcurrentindex(prev => prev + 1 )
}
  return (
    <div className="h-screen bg-[#ecbcfd] flex items-center justify-center">

  {

    currentindex < cssExtremeQuestions.length ? (
      <>
       <div className="absolute top-10 left-6 text-2xl text-gray-800 font-bold bg-white px-4 py-2 rounded-xl shadow-md">
  Q{currentindex + 1}/20
</div>
      <div className="mt-10 w-full max-w-md space-y-4">
        <div className="bg-zinc-50 border-[6px]  border-[#b07d62] py-24 px-4 rounded-2xl">
        <h2 className="text-2xl text-[#4b2e2e] font-bold text-center mb-4 px-4 py-2 bg-white rounded-lg shadow-sm border border-[#c38e70]">
  {cssExtremeQuestions[currentindex].question}
</h2>
        </div>
<div className='grid grid-cols-2 gap-4'>
        {cssExtremeQuestions[currentindex].options.map((option, index) => (
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

export default ExtremeCss