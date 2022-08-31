import React,{useState,useCallback,memo} from 'react';
import { styled } from '@mui/material/styles';
import Result from '../parts/play/Result';
import { Button,Container,Box,Paper,Grid, bottomNavigationActionClasses } from '@mui/material';
import QuestionArea from '../parts/play/QuestionArea';



const AnswerForm = memo(({questions,height}) => {
  
  

  const [questionIndexHistory, setQuestionIndexHistory] = useState([0]) 
  const currentQuestion = questions.find((question) => question.id == questionIndexHistory.slice(-1)[0])

  const goTo = (id) => {
    setQuestionIndexHistory([...questionIndexHistory,id])
  }
  const back = () => {
    if  (questionIndexHistory.length > 1)
    {
      const new_arr = questionIndexHistory.slice(0,questionIndexHistory.length)
      new_arr.pop()

      setQuestionIndexHistory(new_arr)
    }else{
      
    }

  }

  if(currentQuestion.type === 'result'){


      return(<Result message={currentQuestion.label} />)



  }

  else{
      return (
        

            <Container sx={{height:height,display: "grid",gridTemplateColumns: "1fr",gridTemplateRows:"auto 1fr auto",rowGap:"2rem"}}>
            
         
                      <Box sx={{marginTop:"20px"}}>
                        <QuestionArea question={currentQuestion.label}/>
                      </Box>
            
                    
                      <Container sx={{overflowY:"scroll"}} className="AnswersGrid">
                        <Grid container rowSpacing={2} columnSpacing={2} >
                            {
                              currentQuestion.arrows.map((arrow=>{
                                return(
                                  <Grid item xs={12} sm={6} >
                                      <Button variant="contained" fullWidth sx={{height:"80px",fontSize:"1rem"}} onClick={()=>goTo(arrow.to)}>
                                        {arrow.answer}
                                      </Button>
                                  </Grid>
                                )
                              }))
                            }
                          </Grid>
            
            
            
                      </Container>
                      <Box className="footer">
                        <Button variant="contained" fullWidth sx={{height:"100px",fontSize:"1.4rem",bottom:'20px'}} onClick={back}>
                            {"戻る"}
                        </Button>
                      </Box>
            
            </Container>

         
              
    )
  }  


})
  export default AnswerForm







