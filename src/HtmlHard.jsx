import React, { useState } from 'react'

function HtmlHard() {
    const htmlHardQuestions = [
  {
    question: "Which attribute is used to specify the MIME type of a script in HTML?",
    options: ["A) type", "B) script-type", "C) mime", "D) content-type"],
    answer: "A) type"
  },
  {
    question: "What is the purpose of the 'sandbox' attribute in the <iframe> tag?",
    options: [
      "A) To encrypt iframe data",
      "B) To run scripts safely",
      "C) To apply CSS styles only inside the iframe",
      "D) To restrict iframe behavior for security",
    ],
    answer: "D) To restrict iframe behavior for security"
  },
  {
    question: "What is the default method used by forms in HTML?",
    options: ["A) POST", "B) PUT", "C) GET", "D) FETCH"],
    answer: "C) GET"
  },
  {
    question: "Which tag is used to define metadata about an HTML document?",
    options: ["A) <meta>", "B) <info>", "C) <head>", "D) <data>"],
    answer: "A) <meta>"
  },
  {
    question: "Which attribute in a form input is used to prevent the user from changing the value?",
    options: ["A) disabled", "B) fixed", "C) static", "D) readonly"],
    answer: "D) readonly"
  },
  {
    question: "Which input type allows the user to pick a date and time?",
    options: ["A) datetime", "B) datetime-local", "C) time", "D) date"],
    answer: "B) datetime-local"
  },
  {
    question: "What does the 'novalidate' attribute on a form do?",
    options: [
      "A) Disables all JS validation",
      "B) Disables form submission",
      "C) Prevents default form validation",
      "D) Hides validation errors"
    ],
    answer: "C) Prevents default form validation"
  },
  {
    question: "What is the function of the <noscript> tag?",
    options: [
      "A) Runs when script fails",
      "B) Executes code if JavaScript is supported",
      "C) Defines an area where scripts are disabled",
      "D) Provides alternative content if scripts are disabled"
    ],
    answer: "D) Provides alternative content if scripts are disabled"
  },
  {
    question: "Which tag is used to define a container for SVG graphics?",
    options: ["A) <svg>", "B) <canvas>", "C) <graphics>", "D) <vector>"],
    answer: "A) <svg>"
  },
  {
    question: "How do you specify multiple authors in a <meta> tag?",
    options: [
      "A) Separate with commas",
      "B) Use multiple meta tags",
      "C) Use <authors> tag",
      "D) Use array syntax"
    ],
    answer: "B) Use multiple meta tags"
  },
  {
    question: "Which tag allows content to be hidden until requested by the user?",
    options: ["A) <details>", "B) <summary>", "C) <hidden>", "D) <section>"],
    answer: "A) <details>"
  },
  {
    question: "Which HTML5 tag is used to define a self-contained piece of content?",
    options: ["A) <section>", "B) <aside>", "C) <article>", "D) <div>"],
    answer: "C) <article>"
  },
  {
    question: "What is the correct way to specify a custom data attribute?",
    options: [
      "A) data:custom",
      "B) data-custom",
      "C) custom-data",
      "D) data_custom"
    ],
    answer: "B) data-custom"
  },
  {
    question: "Which tag defines scalar measurements within a known range?",
    options: ["A) <progress>", "B) <meter>", "C) <input>", "D) <range>"],
    answer: "B) <meter>"
  },
  {
    question: "Which input type should be used for selecting a color?",
    options: ["A) color", "B) hex", "C) rgb", "D) picker"],
    answer: "A) color"
  },
  {
    question: "Which tag would you use to embed a web page within another web page?",
    options: ["A) <iframe>", "B) <embed>", "C) <object>", "D) <link>"],
    answer: "A) <iframe>"
  },
  {
    question: "Which global attribute is used to translate HTML content?",
    options: ["A) translate", "B) lang", "C) i18n", "D) xml:lang"],
    answer: "A) translate"
  },
  {
    question: "What does the 'autocomplete' attribute do in form elements?",
    options: [
      "A) Suggests tags",
      "B) Fills values based on previous entries",
      "C) Auto-corrects spelling",
      "D) Predicts user input via AI"
    ],
    answer: "B) Fills values based on previous entries"
  },
  {
    question: "Which attribute allows form inputs to be paired with a form element even if they are not nested?",
    options: ["A) form", "B) id", "C) name", "D) bind"],
    answer: "A) form"
  },
  {
    question: "What is the purpose of the <wbr> tag?",
    options: [
      "A) Forces a word break",
      "B) Inserts a line break",
      "C) Prevents line breaking",
      "D) Creates a white space"
    ],
    answer: "A) Forces a word break"
  }
]
 const [currentindex,setcurrentindex]=useState(0)
 const [count,setcount]=useState(0)
 
 function checking (userAns){
    const correctAnswer=htmlHardQuestions[currentindex].answer
    if(userAns===correctAnswer){
setcount( prev => prev + 1)

    }
  setcurrentindex(prev => prev +1)
 }
function next (){
  setcurrentindex(prev => prev + 1 )
}
  return (
   <div className="h-screen bg-[#ecbcfd] flex items-center justify-center">

  {

    currentindex < htmlHardQuestions.length ? (
      <>
       <div className="absolute top-10 left-6 text-2xl text-gray-800 font-bold bg-white px-4 py-2 rounded-xl shadow-md">
  Q{currentindex + 1}/20
</div>
      <div className="mt-10 w-full max-w-md space-y-4">
        <div className="bg-zinc-50 border-[6px]  border-[#b07d62] py-24 px-4 rounded-2xl">
        <h2 className="text-2xl text-[#4b2e2e] font-bold text-center mb-4 px-4 py-2 bg-white rounded-lg shadow-sm border border-[#c38e70]">
  {htmlHardQuestions[currentindex].question}
</h2>
        </div>
<div className='grid grid-cols-2 gap-4'>
        {htmlHardQuestions[currentindex].options.map((option, index) => (
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

export default HtmlHard