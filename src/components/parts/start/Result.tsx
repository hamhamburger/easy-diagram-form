
import { Container,Typography,Paper} from '@mui/material';
import React from "react"

interface Props{
  message: string
}
    

const Result = ({message}: Props):JSX.Element => {
  console.log(message)
  return(
    <Container>
        <Paper sx={{display: "flex",flexFlow:"column",justifyContent: "center",minHeight:'400px',textAlign:"center"}}>

          <Typography variant="h4"  sx={{whiteSpace: "pre-wrap"}}>

                    {message}
          </Typography>
    
        </Paper>      
     
    </Container>
    
  );
}
export default Result;




   