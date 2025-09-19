import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homee from './Components/Home';
import Htmllevelss from './Components/HtmlLevels/Htmllevels';
import HtmlEasy from './HtmlEasy';
import HtmlHard from './HtmlHard';
import Extreme from './HtmlEx';
import Levels from './Components/CssLevels.jsx/Levels';
import CssEasy from './CSSEasy';
import HardCss from './CssHard';
import ExtremeCss from './Extreme';


 // ✅ import spelling correct
// import HtmlEasy from './HtmlEasy';
// import HtmlHard from './HtmlHard';
// import Extreme from './HtmlEx';

// import Levels from './Componenets/CssLevels.jsx/Levels';
// import HardCss from './CssHard';
// import ExtremeCss from './Extreme';
// import CssEasy from './CSSEasy';

// import Htmllevels from './Components/HtmlLevels/Htmllevels';


function App() {
  return (
       <>
    <Routes>
      {/* <Route path="/" element={< ALLLEVELS />} />       */}
          <Route path="/" element={<Homee />} />
            {/* <Route path="/Htmllevels" element={<AllLevels />} /> */}
             <Route path="/Htmllevels" element={< Htmllevelss/>} />
           
              <Route path="/htmlEasy" element={< HtmlEasy/>} />
              <Route path="/htmlMedium" element={< HtmlHard/>} />
              <Route path="/htmlHard" element={< Extreme/>} />

   <Route path="/Csslevels" element={<Levels/>} />
     <Route path="/Easy" element={< CssEasy/>} />
              <Route path="/Medium" element={< HardCss/>} />
              <Route path="/Hard" element={< ExtremeCss/>} />
    </Routes>
 <div>
  
 </div>
    </>

  );
}

export default App;
