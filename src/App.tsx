import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


import QuestionCreatePage from './components/pages/QuestionCreatePage';
import AnswerPage from './components/pages/AnswerPage';

import AboutPage from './components/pages/AboutPage';
import HelpPage from './components/pages/HelpPage';

import { FC } from 'react';


function App():FC {
  return (
    <BrowserRouter>


      <Routes>

       {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
       <Route path='/start/:id' element={<AnswerPage />}></Route>
       {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
       <Route path='*' element={<HelpPage />}></Route>
       {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
       <Route path='/create' element={<QuestionCreatePage />}></Route>
       {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
       <Route path='/about' element={<AboutPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
