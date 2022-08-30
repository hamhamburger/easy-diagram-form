import React,{useState,useCallback} from 'react';
import { styled } from '@mui/material/styles';
import Result from '../parts/play/Result';
import { Button,Container,Box,Paper,Grid } from '@mui/material';
import QuestionArea from '../parts/play/QuestionArea';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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


const AnswerPage = ()=>{
  

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1)  
  const [questionHistory, setQuestionHistory] = useState([1]) 

  const currentQuestion = questions.find((question) => question.id == currentQuestionIndex)
  const pushHistory = useCallback(
    (id) => {
      setQuestionHistory(questionHistory.push(currentQuestion))
      console.log(questionHistory)
    },
    [setQuestionHistory,questionHistory]
  )
  const goTo = (id) => {
    setCurrentQuestionIndex(id)
    pushHistory(id)
  }
  


  if(currentQuestion.type === 'result'){
 


      return(<Result message={currentQuestion.label} />)



  }

  else{
      return (
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
    

      </Box>)
    }  


}
  export default AnswerPage







