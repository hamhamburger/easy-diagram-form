import React,{useState,useMemo,memo,useLayoutEffect,} from 'react';

import AnswerForm from '../blocks/AnswerForm';




const AnswerPage = memo(({questions}) => {
 
  return(
    <AnswerForm questions={questions} height={window.innerHeight}></AnswerForm>
  )


})
  export default AnswerPage







