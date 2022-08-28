import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './components/pages/HomePage';

import NotFound from './components/pages/NotFound';

import QuestionPage from './components/pages/QuestionPage';









function App() {
  return (
    <BrowserRouter>


      <Routes>


       <Route path='/create' element={<QuestionPage />}></Route>
       <Route path='/home' element={<HomePage />}></Route>
       <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
