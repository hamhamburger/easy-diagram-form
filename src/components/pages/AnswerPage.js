import React,{useState,useCallback,memo,useLayoutEffect,} from 'react';
import { styled } from '@mui/material/styles';
import Result from '../parts/play/Result';
import { Button,Container,Box,Paper,Grid, bottomNavigationActionClasses } from '@mui/material';
import QuestionArea from '../parts/play/QuestionArea';
import AnswerForm from '../blocks/AnswerForm';

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};



const AnswerPage = memo(({questions}) => {
 
  return(
    <AnswerForm questions={questions} height={useWindowSize()[1]}></AnswerForm>
  )


})
  export default AnswerPage







