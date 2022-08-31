import React,{useState,memo,useLayoutEffect,} from 'react';

import AnswerForm from '../blocks/AnswerForm';

const useWindowSize = memo(() => {
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
})



const AnswerPage = memo(({questions}) => {
 
  return(
    <AnswerForm questions={questions} height={useWindowSize()[1]}></AnswerForm>
  )


})
  export default AnswerPage







