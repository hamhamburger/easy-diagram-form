import { TextField } from '@mui/material';
import { useCallback } from 'react';
import { Container,Typography,Paper} from '@mui/material';
import { Margin } from '@mui/icons-material';
import { Box } from '../../../../node_modules/@mui/material/index';

    

function QuestionArea({ question }) {


  return(
    <Container>
        <Paper sx={{display: "flex",flexFlow:"column",justifyContent: "center",minHeight:'400px',textAlign:"center"}}>
        
          <Typography variant="h4"  sx={{whiteSpace: "pre-wrap"}}>
                    {question}
          </Typography>
    
        </Paper>      
     
    </Container>
    
  );
}
export default QuestionArea;




   