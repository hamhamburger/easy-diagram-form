import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './components/pages/HomePage';

import NotFound from './components/pages/NotFound';

import QuestionCreatePage from './components/pages/QuestionCreatePage';

import AnswerPage from './components/pages/AnswerPage';







function App() {
  return (
    <BrowserRouter>


      <Routes>

      <Route path='/start' element={<AnswerPage />}></Route>
       <Route path='/create' element={<QuestionCreatePage />}></Route>
       <Route path='/home' element={<HomePage />}></Route>
       <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
