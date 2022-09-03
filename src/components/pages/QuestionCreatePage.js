
import QuestionDiagram from '../blocks/QuestionDiagram';
import ButtonAppBar from '../blocks/ButtonAppBar';
import { Box } from '@mui/system';









const QuestionCreatePage = ()=>{
  return(
    <Box sx={{height:"100vh",display: "grid",gridTemplateColumns: "1fr",gridTemplateRows:"auto 1fr"}}>
      <ButtonAppBar />
      <QuestionDiagram />
    </Box>
  )
}
      
  


export default QuestionCreatePage







