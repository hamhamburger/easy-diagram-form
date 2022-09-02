import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import NotFound from './components/pages/NotFound';
import QuestionCreatePage from './components/pages/QuestionCreatePage';
import AnswerPage from './components/pages/AnswerPage';






function App() {
  return (
    <BrowserRouter>


      <Routes>

       <Route path='/start/:id' element={<AnswerPage />}></Route>
       <Route path='*' element={<QuestionCreatePage />}></Route>
       <Route path='/test' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
