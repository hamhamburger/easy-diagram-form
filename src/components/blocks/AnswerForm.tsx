

import React,{useState,useCallback,memo} from 'react';

import { Button,Container,Box,Grid, } from '@mui/material';
import Result from '../parts/start/Result';
import QuestionArea from '../parts/start/QuestionArea';
import { Height, ImportExport } from '@mui/icons-material';
import QuestionInterface from 'components/interfaces/questions'

inteeface props: {
  questions:  QuestionInterface[],
  height: number
}

const AnswerForm = memo(function AnswerForm({questions,height}: props) {
  


  const [questionIndexHistory, setQuestionIndexHistory] = useState([0]) 
  // @ts-expect-error TS(7006): Parameter 'question' implicitly has an 'any' type.
  const currentQuestion = questions.find((question) => question.id == questionIndexHistory.slice(-1)[0])

  // @ts-expect-error TS(7006): Parameter 'id' implicitly has an 'any' type.
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

  if(!questions) return(
    <h1>質問が存在しません</h1>
  )
  const footer = 
    <Box className="footer" sx={{display:"flex",justifyContent:"center"}}>
      <Button variant="contained" sx={{height:{xs:50,sm:100},width:{xs:"100%",sm:"80%"},fontSize:"1.4rem",bottom:'20px'}} onClick={back}>
        {"戻る"}
      </Button>
    </Box>
  


  if(currentQuestion.type === 'result'){
      return(

      
      
      <Container sx={{height:height,display: "grid",gridTemplateColumns: "1fr",gridTemplateRows:"auto 1fr auto",rowGap:"2rem"}}>

                      
                      <Box sx={{marginTop:"20px"}}>
                        
                        <Result message={currentQuestion.label} />
                      </Box>
                      
                      <Box sx={{textAlign:"center"}}>
                        
                        <Box component="a" href={window.location.origin}  target="_blank">createdByFormula</Box>
                      </Box>
                      
                      <Container sx={{overflowY:"scroll"}} className="AnswersGrid">
                        
                        <Grid container rowSpacing={2} columnSpacing={2} >
                            
                          </Grid>
            
            
            
                      </Container>
                      {
                        questionIndexHistory.length > 1 && footer
                         
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
                      {questionIndexHistory.length > 1 &&  footer}
                    
                       
                    
            
            </Container>

         
              
    )
  }  


})
  export default AnswerForm







