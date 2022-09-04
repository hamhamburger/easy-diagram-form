

import React,{useState,useCallback,memo} from 'react';

import { Button,Container,Box,Grid, } from '@mui/material';
import Result from '../parts/play/Result';
import QuestionArea from '../parts/play/QuestionArea';
const AnswerForm = memo(({questions,height}) => {
  
  

  const [questionIndexHistory, setQuestionIndexHistory] = useState([0]) 
  const currentQuestion = questions.find((question) => question.id == questionIndexHistory.slice(-1)[0])

  const goTo = (id) => {
    setQuestionIndexHistory([...questionIndexHistory,id])
  }
  //useCallbackを使うと上手く動かない



  const back = useCallback(() => {
    if  (questionIndexHistory.length > 1)
    {
      const new_arr = questionIndexHistory.slice(0,questionIndexHistory.length)
      new_arr.pop()
      setQuestionIndexHistory(new_arr)
    }

  },[setQuestionIndexHistory,questionIndexHistory])

  if(currentQuestion.type === 'result'){
      return(

      
      <Container sx={{height:height,display: "grid",gridTemplateColumns: "1fr",gridTemplateRows:"auto 1fr auto",rowGap:"2rem"}}>

                      <Box sx={{marginTop:"20px"}}>
                        <Result message={currentQuestion.label} />
                      </Box>
            
                      <Container sx={{overflowY:"scroll"}} className="AnswersGrid">
                        <Grid container rowSpacing={2} columnSpacing={2} >
                            
                          </Grid>
            
            
            
                      </Container>
                      {
                        questionIndexHistory.length > 1 && 
                          <Box className="footer">
                            <Button variant="contained" fullWidth sx={{height:{xs:50,sm:100},fontSize:"1.4rem",bottom:'20px'}} onClick={back}>
                              {"戻る"}
                            </Button>
                          </Box>
                      }
            
            </Container>

      
      
      )
  }

  else{
      return (
            <Container sx={{height:height,display: "grid",gridTemplateColumns: "1fr",gridTemplateRows:"auto 1fr auto",rowGap:"2rem"}}>

                      <Box sx={{marginTop:"20px"}}>
                        <QuestionArea 
                        question={currentQuestion.label ? currentQuestion.label : "質問が入力されていません"}/>
                      </Box>
            
                      <Container sx={{overflowY:"scroll"}} className="AnswersGrid">
                        <Grid container rowSpacing={2} columnSpacing={2} >
                            {
                              currentQuestion.arrows.map((arrow=>{
                                return(
                                  <Grid item xs={12} sm={6} key={arrow.answer}>
                                      <Button variant="contained" fullWidth sx={{height:{xs:50,sm:80},fontSize:"1rem"}} onClick={()=>goTo(arrow.to)}>
                                        {arrow.answer}
                                      </Button>
                                  </Grid>
                                )
                              }))
                            }
                          </Grid>
            
            
            
                      </Container>
                      {questionIndexHistory.length > 1 && 
                     <Box className="footer">
                        <Button variant="contained" fullWidth sx={{height:{xs:50,sm:100},fontSize:"1.4rem",bottom:'20px'}} onClick={back}>
                            {"戻る"}
                        </Button>
                      </Box>}
            
            </Container>

         
              
    )
  }  


})
  export default AnswerForm







