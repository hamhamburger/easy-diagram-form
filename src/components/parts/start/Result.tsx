
import { Container,Typography,Paper} from '@mui/material';
import { AttractionsOutlined, Margin } from '@mui/icons-material';
import { Box } from '@mui/material';

    

function Result({
  message
}: any) {
  console.log(message)
  return(
    // @ts-expect-error TS(2749): 'Container' refers to a value, but is being used a... Remove this comment to see the full error message
    <Container>
        // @ts-expect-error TS(2749): 'Paper' refers to a value, but is being used as a ... Remove this comment to see the full error message
        <Paper sx={{display: "flex",flexFlow:"column",justifyContent: "center",minHeight:'400px',textAlign:"center"}}>
        
          // @ts-expect-error TS(2749): 'Typography' refers to a value, but is being used ... Remove this comment to see the full error message
          <Typography variant="h4"  sx={{whiteSpace: "pre-wrap"}}>
                    // @ts-expect-error TS(2552): Cannot find name 'message'. Did you mean 'onmessag... Remove this comment to see the full error message
                    {message}
          </Typography>
    
        </Paper>      
     
    </Container>
    
  );
}
export default Result;




   