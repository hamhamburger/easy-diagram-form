
import { Container,Typography,Paper} from '@mui/material';
import { AttractionsOutlined, Margin } from '@mui/icons-material';
import { Box } from '../../../../node_modules/@mui/material/index';

    

function Result({message}) {
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




   