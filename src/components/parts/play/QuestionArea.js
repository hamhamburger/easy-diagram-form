import { TextField } from '@mui/material';
import { useCallback } from 'react';
import { Container,Typography,Paper} from '@mui/material';
import { Margin } from '@mui/icons-material';
import { Box } from '../../../../node_modules/@mui/material/index';

    

function QuestionArea({ question }) {


  return(
    <Container>
        <Paper sx={{display: "flex",flexFlow:"column",justifyContent: "center",minHeight:'200px',textAlign:"center",overflowY:"scroll",maxHeight:"40vh"}}>
          <Typography variant="h5"  sx={{whiteSpace: "pre-wrap",wordBreak:"break-all",}}>
          {question ? question : "質問が入力されていません"}
          </Typography>
        </Paper>      
      
    </Container>
    
  );
}
export default QuestionArea;




   