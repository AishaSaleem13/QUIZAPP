import React, { useState } from 'react';

function  Extreme() {
const htmlExtremeQuiz = [
  {
    question: "What happens if you place a <div> inside a <span> tag?",
    options: [
      "A) The browser throws an error",
      "B) It renders without any issues",
      "C) The browser automatically moves the <div> outside",
      "D) It renders but breaks semantics and layout"
    ],
    correctAnswer: "D"
  },
  {
    question: "Which tag is not allowed to be inside a <table> directly?",
    options: [
      "A) <thead>",
      "B) <tbody>",
      "C) <div>",
      "D) <tr>"
    ],
    correctAnswer: "C"
  },
  {
    question: "What does the sandbox attribute in <iframe> do?",
    options: [
      "A) Applies restrictions to iframe content",
      "B) Embeds external scripts",
      "C) Applies CSS grid",
      "D) Removes all HTML styles"
    ],
    correctAnswer: "A"
  },
  {
    question: "Which of these tags is a void element in HTML?",
    options: [
      "A) <textarea>",
      "B) <img>",
      "C) <span>",
      "D) <script>"
    ],
    correctAnswer: "B"
  },
  {
    question: "What happens if you omit the <!DOCTYPE html> declaration in HTML5?",
    options: [
      "A) Page won’t load",
      "B) Page becomes inaccessible",
      "C) Browser renders in Quirks Mode",
      "D) Only CSS will break"
    ],
    correctAnswer: "C"
  },
  {
    question: "Which HTML tag introduces risk of cross-site scripting (XSS) if used carelessly?",
    options: [
      "A) <script>",
      "B) <section>",
      "C) <main>",
      "D) <div>"
    ],
    correctAnswer: "A"
  },
  {
    question: "What’s the default display of a <span> element?",
    options: [
      "A) inline",
      "B) block",
      "C) flex",
      "D) grid"
    ],
    correctAnswer: "A"
  },
  {
    question: "Can you nest a <form> tag inside another <form>?",
    options: [
      "A) Yes, always",
      "B) No, it’s invalid HTML",
      "C) Only in HTML4",
      "D) Yes, but only in Safari"
    ],
    correctAnswer: "B"
  },
  {
    question: "What is the correct use of the label element?",
    options: [
      "A) Wrapping input tag always",
      "B) Only with radio buttons",
      "C) Linking to input via for and id",
      "D) It’s obsolete"
    ],
    correctAnswer: "C"
  },
  {
    question: "What does the autocomplete=\"off\" attribute do in a form?",
    options: [
      "A) Stops browser cache",
      "B) Disables JS validation",
      "C) Prevents browser from suggesting inputs",
      "D) Turns off backend storage"
    ],
    correctAnswer: "C"
  },
  {
    question: "What is the purpose of the role attribute in HTML?",
    options: [
      "A) Specify CSS class",
      "B) Animate sections",
      "C) Accessibility and ARIA support",
      "D) Define JavaScript behavior"
    ],
    correctAnswer: "C"
  },
  {
    question: "What happens if multiple elements have the same id?",
    options: [
      "A) DOM access issues and unpredictable behavior",
      "B) They get grouped",
      "C) The browser ignores them",
      "D) All CSS gets removed"
    ],
    correctAnswer: "A"
  },
  {
    question: "Which tag is best suited for standalone, reusable content like blog posts?",
    options: [
      "A) <section>",
      "B) <article>",
      "C) <main>",
      "D) <header>"
    ],
    correctAnswer: "B"
  },
  {
    question: "Which tag is strictly used for emphasizing importance (not style)?",
    options: [
      "A) <strong>",
      "B) <b>",
      "C) <em>",
      "D) <i>"
    ],
    correctAnswer: "A"
  },
  {
    question: "Which of the following elements is not semantic in HTML5?",
    options: [
      "A) <div>",
      "B) <article>",
      "C) <footer>",
      "D) <aside>"
    ],
    correctAnswer: "A"
  },
  {
    question: "Which attribute should be used to improve accessibility for screen readers?",
    options: [
      "A) contenteditable",
      "B) aria-label",
      "C) class",
      "D) hidden"
    ],
    correctAnswer: "B"
  },
  {
    question: "What will be the output if you use an unknown tag like <custom-tag> in HTML5?",
    options: [
      "A) Error",
      "B) Treated as inline element by default",
      "C) Treated as block element",
      "D) Rendered in red text"
    ],
    correctAnswer: "B"
  },
  {
    question: "Which attribute makes an input field not editable but still submits data?",
    options: [
      "A) disabled",
      "B) readonly",
      "C) hidden",
      "D) static"
    ],
    correctAnswer: "B"
  },
  {
    question: "Which tag is not allowed in the <head> section?",
    options: [
      "A) <title>",
      "B) <main>",
      "C) <style>",
      "D) <meta>"
    ],
    correctAnswer: "B"
  },
  {
    question: "What does the hidden attribute do in HTML?",
    options: [
      "A) Makes element invisible with opacity",
      "B) Hides the element completely from rendering",
      "C) Hides text only",
      "D) Prevents JS access"
    ],
    correctAnswer: "B"
  }
];


  const [currentindex, setcurrentindex] = useState(0);
  const [count, setCount] = useState(0);

  function checking(userAns) {
    const correctOption = htmlExtremeQuiz[currentindex].correctAnswer;

    if (userAns[0] === correctOption) {
      setCount(prev => prev + 1);
    }

    setcurrentindex(prev => prev + 1);
  }
function next (){
  setcurrentindex(prev => prev + 1 )
}
  return (
   <div className="h-screen bg-[#ecbcfd] flex items-center justify-center">

  {

    currentindex < htmlExtremeQuiz.length ? (
      <>
       <div className="absolute top-10 left-6 text-2xl text-gray-800 font-bold bg-white px-4 py-2 rounded-xl shadow-md">
  Q{currentindex + 1}/20
</div>
      <div className="mt-10 w-full max-w-md space-y-4">
        <div className="bg-zinc-50 border-[6px]  border-[#b07d62] py-24 px-4 rounded-2xl">
        <h2 className="text-2xl text-[#4b2e2e] font-bold text-center mb-4 px-4 py-2 bg-white rounded-lg shadow-sm border border-[#c38e70]">
  {htmlExtremeQuiz[currentindex].question}
</h2>
        </div>
<div className='grid grid-cols-2 gap-4'>
        {htmlExtremeQuiz[currentindex].options.map((option, index) => (
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
  );
}

export default Extreme;
