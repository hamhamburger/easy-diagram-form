import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import QuestionCreatePage from "./components/pages/QuestionCreatePage";
import AnswerPage from "./components/pages/AnswerPage";

import AboutPage from "./components/pages/AboutPage";
import HelpPage from "./components/pages/HelpPage";
import OpenPage from "components/pages/OpenPage";
function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/start/:type/:id" element={<AnswerPage />}></Route>
        <Route path="*" element={<HelpPage />}></Route>
        <Route path="/create" element={<QuestionCreatePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/open_form" element={<OpenPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
