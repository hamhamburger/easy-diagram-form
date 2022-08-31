import React,{useState,useCallback,memo} from 'react';
import { styled } from '@mui/material/styles';
import Result from '../parts/play/Result';
import { Button,Container,Box,Paper,Grid, bottomNavigationActionClasses } from '@mui/material';
import QuestionArea from '../parts/play/QuestionArea';
import AnswerForm from '../blocks/AnswerForm';



const AnswerPage = memo(({questions}) => {
  
  return(
    <AnswerForm questions={questions} height={"98vh"}></AnswerForm>
  )


})
  export default AnswerPage







