import React, { useState } from 'react'
import "./index.css"
function CssEasy() {
const cssEasyQuestions = [
  {
    question: "What does CSS stand for?",
    options: [
      "A) Creative Style Sheets",
      "B) Cascading Style Sheets",
      "C) Computer Style Sheets",
      "D) Colorful Style Sheets"
    ],
    correct: "B) Cascading Style Sheets"
  },
  {
    question: "Which HTML tag is used to link an external CSS file?",
    options: [
      "A) <style>",
      "B) <css>",
      "C) <link>",
      "D) <script>"
    ],
    correct: "C) <link>"
  },
  {
    question: "Which property is used to change the background color?",
    options: [
      "A) backgroundColor",
      "B) color",
      "C) bgColor",
      "D) background-color"
    ],
    correct: "D) background-color"
  },
  {
    question: "How do you make text bold in CSS?",
    options: [
      "A) font-weight: bold;",
      "B) text-style: bold;",
      "C) font-style: bold;",
      "D) font-bold: true;"
    ],
    correct: "A) font-weight: bold;"
  },
  {
    question: "Which property controls the text size?",
    options: [
      "A) text-size",
      "B) font-size",
      "C) size",
      "D) font"
    ],
    correct: "B) font-size"
  },
  {
    question: "Which value is the default for the position property?",
    options: [
      "A) absolute",
      "B) fixed",
      "C) static",
      "D) relative"
    ],
    correct: "C) static"
  },
  {
    question: "Which CSS property is used to center text?",
    options: [
      "A) text-style: center;",
      "B) align: center;",
      "C) text-align: center;",
      "D) center: text;"
    ],
    correct: "C) text-align: center;"
  },
  {
    question: "How do you write a comment in CSS?",
    options: [
      "A) // this is a comment",
      "B) <!-- this is a comment -->",
      "C) /* this is a comment */",
      "D) ** this is a comment **"
    ],
    correct: "C) /* this is a comment */"
  },
  {
    question: "Which unit is NOT relative in CSS?",
    options: [
      "A) em",
      "B) px",
      "C) rem",
      "D) %"
    ],
    correct: "B) px"
  },
  {
    question: "How do you select an element with id 'header'?",
    options: [
      "A) .header",
      "B) #header",
      "C) header",
      "D) *header"
    ],
    correct: "B) #header"
  },
  {
    question: "Which property is used to add space inside an element?",
    options: [
      "A) margin",
      "B) spacing",
      "C) padding",
      "D) border-spacing"
    ],
    correct: "C) padding"
  },
  {
    question: "Which property adds space outside an element?",
    options: [
      "A) spacing",
      "B) border",
      "C) padding",
      "D) margin"
    ],
    correct: "D) margin"
  },
  {
    question: "What is the correct syntax to make all <p> tags blue?",
    options: [
      "A) p { text: blue; }",
      "B) p:color(blue);",
      "C) p { color: blue; }",
      "D) <p style='blue;'>"
    ],
    correct: "C) p { color: blue; }"
  },
  {
    question: "Which property is used to change the font of text?",
    options: [
      "A) font-weight",
      "B) font-style",
      "C) font-family",
      "D) text-font"
    ],
    correct: "C) font-family"
  },
  {
    question: "How do you apply styles to a class 'menu'?",
    options: [
      "A) #menu",
      "B) *menu",
      "C) menu",
      "D) .menu"
    ],
    correct: "D) .menu"
  },
  {
    question: "Which property makes a box have rounded corners?",
    options: [
      "A) corner-radius",
      "B) border-radius",
      "C) box-corner",
      "D) round-corner"
    ],
    correct: "B) border-radius"
  },
  {
    question: "Which property is used to hide an element?",
    options: [
      "A) visibility: hide;",
      "B) display: none;",
      "C) hide: true;",
      "D) visible: false;"
    ],
    correct: "B) display: none;"
  },
  {
    question: "Which value is used for 'display' to create a flexbox?",
    options: [
      "A) inline-block",
      "B) flex",
      "C) block-flex",
      "D) display-box"
    ],
    correct: "B) flex"
  },
  {
    question: "How can you make a list not display bullets?",
    options: [
      "A) list-style-type: none;",
      "B) text-decoration: none;",
      "C) bullet: none;",
      "D) list: no-bullets;"
    ],
    correct: "A) list-style-type: none;"
  },
  {
    question: "Which property sets the height of an element?",
    options: [
      "A) width",
      "B) height",
      "C) size",
      "D) block-height"
    ],
    correct: "B) height"
  }
];

const [currentindex,setcurrentindex]=useState(0)
const [count,setcount]=useState(0)
function checking (userAns){
  const correctAnswer=cssEasyQuestions[currentindex].correct
  if(userAns===correctAnswer){

setcount(prev => prev+ 1)
  }
setcurrentindex(prev => prev + 1)
}
function next (){
  setcurrentindex(prev => prev + 1 )
}
  return (
   <>
  <div className="h-screen bg-[#ecbcfd] flex items-center justify-center">

  {

    currentindex < cssEasyQuestions.length ? (
      <>
       <div className="absolute top-10 left-6 text-2xl text-gray-800 font-bold bg-white px-4 py-2 rounded-xl shadow-md">
  Q{currentindex + 1}/20
</div>
      <div className="mt-10 w-full max-w-md space-y-4">
        <div className="bg-zinc-50 border-[6px]  border-[#b07d62] py-24 px-4 rounded-2xl">
        <h2 className="text-2xl text-[#4b2e2e] font-bold text-center mb-4 px-4 py-2 bg-white rounded-lg shadow-sm border border-[#c38e70]">
  {cssEasyQuestions[currentindex].question}
</h2>
        </div>
<div className='grid grid-cols-2 gap-4'>
        {cssEasyQuestions[currentindex].options.map((option, index) => (
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


   </>
  )
}

export default CssEasy