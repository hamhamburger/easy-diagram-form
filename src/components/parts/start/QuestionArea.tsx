
import React from "react";
import { Container, Typography, Paper } from "@mui/material";


interface Props{
  questionBody: string
}
    

const QuestionArea=({
  questionBody
}:Props):JSX.Element => {
  const question = questionBody !== undefined ? questionBody : "質問が入力されていません"

  return(

    <Container>
        
        <Paper sx={{display: "flex",flexFlow:"column",justifyContent: "center",minHeight:'200px',textAlign:"center",overflowY:"scroll",maxHeight:"40vh"}}>
          
          <Typography variant="h5"  sx={{whiteSpace: "pre-wrap",wordBreak:"break-all",}}>
            {question}
          </Typography>
        </Paper>      
      
    </Container>
    
  );
}
export default QuestionArea;




   