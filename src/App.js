import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './components/pages/HomePage';

import NotFound from './components/pages/NotFound';

import QuestionCreatePage from './components/pages/QuestionCreatePage';

import AnswerPage from './components/pages/AnswerPage';




//デバッグ
const questions = [
  {
      "id": "0",
      "label": "やっぱり？",
      "type": "question",
      "arrows": []
  },
  {
      "id": "1",
      "label": "短い質問",
      "type": "question",
      "arrows": [
          {
              "answer": "二本",
              "to": "3"
          },
          {
              "answer": "長い質問",
              "to": "2"
          },
          {
            "answer": "二本",
            "to": "3"
        },
        {
            "answer": "四本",
            "to": "2"
        },
        {
          "answer": "二本",
          "to": "3"
        },
        {
            "answer": "四本",
            "to": "2"
        },
        {
          "answer": "二本",
          "to": "3"
      },
      {
          "answer": "四本",
          "to": "2"
      },
      {
        "answer": "二本",
        "to": "3"
      },
      {
          "answer": "四本",
          "to": "2"
      },
      {
        "answer": "二本",
        "to": "3"
    },
    {
        "answer": "四本",
        "to": "2"
    },
    {
      "answer": "二本",
      "to": "3"
    },
    {
        "answer": "四本",
        "to": "2"
    },
          
      ]
  },
  {
      "id": "2",
      "label": "可愛い?長い長い長い\n質問質問長い長い\n質問質問長い長い\n質問質問長い長い\n質問質問長い長い\n質問質問長い長い\n質問質問長い長い\n質問質問長い長い\n質問質問長い長い\n質問質問長い長い\n質問質問い\n質問質問い\n質問質問い\n質問質問い\n質問質問",
      "type": "question",
      "arrows": [
          {
              "answer": "はい",
              "to": "5"
          },
          {
              "answer": "いいえ",
              "to": "6"
          }
      ]
  },
  {
      "id": "3",
      "label": "人間?　機械?",
      "type": "question",
      "arrows": [
          {
              "answer": "まだ決めていないがもう少ししたら決められる",
              "to": "4"
          },
          {
              "answer": "機械",
              "to": "7"
          }
      ]
  },
  {
      "id": "4",
      "label": "人ですね\n",
      "type": "result"
  },
  {
      "id": "5",
      "label": "猫だね",
      "type": "result"
  },
  {
      "id": "6",
      "label": "私だ",
      "type": "result"
  },
  {
      "id": "7",
      "label": "ペッパー君？",
      "type": "result"
  }
]


//


function App() {
  return (
    <BrowserRouter>


      <Routes>

       <Route path='/start' element={<AnswerPage  questions={questions}/>}></Route>
       <Route path='/create' element={<QuestionCreatePage />}></Route>
       <Route path='/home' element={<HomePage />}></Route>
       <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
