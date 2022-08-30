import React,{useState,useCallback} from 'react';
import { styled } from '@mui/material/styles';
import Result from '../parts/play/Result';
import { Button,Container,Box,Paper,Grid, bottomNavigationActionClasses } from '@mui/material';
import QuestionArea from '../parts/play/QuestionArea';


const questions = [
  {
      "id": "0",
      "label": "やっぱり？",
      "type": "question",
      "arrows": []
  },
  {
      "id": "1",
      "label": "\n行1はどうですか？もしそうなら和はやじゅ",
      "type": "question",
      "arrows": [
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
      "label": "可愛い?",
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
              "answer": "人間",
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


const AnswerPage = ({questions}) => {
  


  const [questionIndexHistory, setQuestionIndexHistory] = useState([1]) 
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
        <div>
          <Box sx={{height:"100vh",display: "flex",flexFlow:"column",justifyContent: "space-between"}}>
          
                    <Box sx={{flex:1}}>
                      <QuestionArea question={currentQuestion.label}/>
          
                    </Box>
                    <Container sx={{flex:1}}>
                      <Grid container rowSpacing={2} columnSpacing={2}>
                        {
                          currentQuestion.arrows.map((arrow=>{
                            return(
                              <Grid item xs={12} sm={6} >
                                  <Button variant="contained" fullWidth sx={{height:"80px",fontSize:"30px"}} onClick={()=>goTo(arrow.to)}>
                                    {arrow.answer}
                                  </Button>
                              </Grid>
                            )
                          }))
                        }
                      </Grid>
          
          
          
                    </Container>
              
          
                </Box>
                <Button variant="contained" fullWidth sx={{height:"100px",fontSize:"30px",position:"fixed",bottom:'10px'}} onClick={back}>
               {"戻る"}
             </Button>
        </div>
    
    )
  }  


}
  export default AnswerPage







