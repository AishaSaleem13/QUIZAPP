import React, {useState}from 'react'


function HtmlEasy() {
    const htmlEasyQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "A) Hyperlinks and Text Markup Language",
      "B) Home Tool Markup Language",
      "C) Hyper Text Markup Language",
      "D) Hyper Tool Markup Language"
    ],
    answer: "C) Hyper Text Markup Language"
  },
  {
    question: "What tag is used to create a hyperlink in HTML?",
    options: [
      "A) <link>",
      "B) <href>",
      "C) <a>",
      "D) <url>"
    ],
    answer: "C) <a>"
  },
  {
    question: "Which HTML tag is used to define a paragraph?",
    options: [
      "A) <para>",
      "B) <paragraph>",
      "C) <p>",
      "D) <text>"
    ],
    answer: "C) <p>"
  },
  {
    question: "How do you start an HTML document?",
    options: [
      "A) <start>",
      "B) <html>",
      "C) <begin>",
      "D) <head>"
    ],
    answer: "B) <html>"
  },
  {
    question: "Which tag is used to insert an image in HTML?",
    options: [
      "A) <img>",
      "B) <image>",
      "C) <src>",
      "D) <pic>"
    ],
    answer: "A) <img>"
  },
  {
    question: "Which attribute is used to provide alternate text for an image?",
    options: [
      "A) title",
      "B) src",
      "C) alt",
      "D) href"
    ],
    answer: "C) alt"
  },
  {
    question: "How do you add a line break in HTML?",
    options: [
      "A) <break>",
      "B) <br>",
      "C) <lb>",
      "D) <newline>"
    ],
    answer: "B) <br>"
  },
  {
    question: "Which HTML tag is used to make text bold?",
    options: [
      "A) <bold>",
      "B) <strong>",
      "C) <b>",
      "D) Both B and C"
    ],
    answer: "D) Both B and C"
  },
  {
    question: "Which HTML element is used to define a heading?",
    options: [
      "A) <head>",
      "B) <h1> to <h6>",
      "C) <heading>",
      "D) <hd>"
    ],
    answer: "B) <h1> to <h6>"
  },
  {
    question: "Which tag is used to create a list in HTML?",
    options: [
      "A) <list>",
      "B) <ul> or <ol>",
      "C) <li>",
      "D) Both B and C"
    ],
    answer: "D) Both B and C"
  },
  {
    question: "Which HTML tag is used for inserting the largest heading?",
    options: [
      "A) <heading>",
      "B) <h1>",
      "C) <h6>",
      "D) <head>"
    ],
    answer: "B) <h1>"
  },
  {
    question: "Which HTML tag is used to define a table row?",
    options: [
      "A) <td>",
      "B) <tr>",
      "C) <table>",
      "D) <row>"
    ],
    answer: "B) <tr>"
  },
  {
    question: "What is the correct HTML element for inserting a horizontal line?",
    options: [
      "A) <line>",
      "B) <hr>",
      "C) <br>",
      "D) <border>"
    ],
    answer: "B) <hr>"
  },
  {
    question: "Which HTML tag is used to display a numbered list?",
    options: [
      "A) <ul>",
      "B) <ol>",
      "C) <dl>",
      "D) <list>"
    ],
    answer: "B) <ol>"
  },
  {
    question: "Which element is used to input data into a form?",
    options: [
      "A) <input>",
      "B) <form>",
      "C) <text>",
      "D) <label>"
    ],
    answer: "A) <input>"
  },
  {
    question: "Which HTML tag is used to group related elements in a form?",
    options: [
      "A) <input-group>",
      "B) <section>",
      "C) <fieldset>",
      "D) <group>"
    ],
    answer: "C) <fieldset>"
  },
  {
    question: "Which tag defines the document's title shown in the browser tab?",
    options: [
      "A) <meta>",
      "B) <title>",
      "C) <head>",
      "D) <header>"
    ],
    answer: "B) <title>"
  },
  {
    question: "Which tag is used to define an unordered (bulleted) list?",
    options: [
      "A) <ul>",
      "B) <ol>",
      "C) <li>",
      "D) <list>"
    ],
    answer: "A) <ul>"
  },
  {
    question: "Which attribute sets the background color in HTML?",
    options: [
      "A) color",
      "B) bgcolor",
      "C) background-color",
      "D) bg"
    ],
    answer: "B) bgcolor"
  },
  {
    question: "What tag is used to define a dropdown list in HTML?",
    options: [
      "A) <input type='dropdown'>",
      "B) <select>",
      "C) <list>",
      "D) <option>"
    ],
    answer: "B) <select>"
  }
];
const [currentindex,setcurrentindex]=useState(0)
 const [count,setcount]=useState(0)
 
 function checking (userAns){
    const correctAnswer=htmlEasyQuestions[currentindex].answer
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

    currentindex < htmlEasyQuestions.length ? (
      <>
       <div className="absolute top-10 left-6 text-2xl text-gray-800 font-bold bg-white px-4 py-2 rounded-xl shadow-md">
  Q{currentindex + 1}/20
</div>
      <div className="mt-10 w-full max-w-md space-y-4">
        <div className="bg-zinc-50 border-[6px]  border-[#b07d62] py-24 px-4 rounded-2xl">
        <h2 className="text-2xl text-[#4b2e2e] font-bold text-center mb-4 px-4 py-2 bg-white rounded-lg shadow-sm border border-[#c38e70]">
  {htmlEasyQuestions[currentindex].question}
</h2>
        </div>
<div className='grid grid-cols-2 gap-4'>
        {htmlEasyQuestions[currentindex].options.map((option, index) => (
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

export default HtmlEasy