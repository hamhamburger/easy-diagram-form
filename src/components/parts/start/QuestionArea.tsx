import { TextField } from '@mui/material';
import { useCallback } from 'react';
import { Container,Typography,Paper} from '@mui/material';
import { Margin } from '@mui/icons-material';
import { Box } from '../../../../node_modules/@mui/material/index';

    

function QuestionArea({
  question
}: any) {


  return(
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Paper sx={{display: "flex",flexFlow:"column",justifyContent: "center",minHeight:'200px',textAlign:"center",overflowY:"scroll",maxHeight:"40vh"}}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Typography variant="h5"  sx={{whiteSpace: "pre-wrap",wordBreak:"break-all",}}>
          {question ? question : "質問が入力されていません"}
          </Typography>
        </Paper>      
      
    </Container>
    
  );
}
export default QuestionArea;




   