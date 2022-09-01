
import { useState,useCallback } from 'react';
import { Handle, Position, useUpdateNodeInternals} from 'react-flow-renderer';
import { Box, TextField,Fab,Container} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import { handleStyle } from '../css/handleStyle';
import InputHandle from '../handles/InputHandle';
const handleContainerStyle = {
 


}



const AnswerHandle = ({num}) => {

  const [connectionCount, setConnectionCount] = useState(0);
  const isValid = (obj)=>{
   // return connectionCount === 0 ? true : false;
   return false;
  } 
  const onConnect = () => {
    alert("connected!!!!")
    setConnectionCount(1)

  } 
  return(<div>
    <Handle type="source" position={Position.Bottom} id={`out${num}`} onConnect={onConnect} 
    style={handleStyle} isValidConnection={isValid} />
    </div>
  )
}



const QuestionNode = ({ data,id}) => {
  const {label,first} = data
  const inputHandleCount = first ? 0 : 4
  const [answerHandleCount,setAnswerHandleCount] = useState(2)
  const nodeId = id
  const updateNodeInternals = useUpdateNodeInternals();
  console.log(data)
  const placeholder = first ? 'ここを起点に別の質問へと分岐させていきます\n最初の質問を入力して下さい' : "質問を入力して下さい"

  const onClickAddAnswer = useCallback((evt) => {
    setAnswerHandleCount(answerHandleCount+1)
    updateNodeInternals(nodeId)
  },[setAnswerHandleCount,answerHandleCount,nodeId,updateNodeInternals])

  const onClickRemoveAnswer = useCallback((evt) => {
    if(answerHandleCount > 1){
      setAnswerHandleCount(answerHandleCount-1)
      updateNodeInternals(nodeId)
    }
  },[setAnswerHandleCount,answerHandleCount,nodeId,updateNodeInternals])

  const onChange = useCallback((evt) => {
    data.label = evt.target.value;
  }, []);

  return (
    <Box className="question-node" sx={{display:"flex",flexDirection:"column",justifyContent:"space-around",}}>
      <Box className="inputHandleContainer" sx={{ display: "flex",justifyContent: "space-around",}}>
        {Array(inputHandleCount).fill().map((_,i)=>{
           return(
             <InputHandle num={i} key={`${nodeId}input${i}`} nodeId={nodeId}/>
              )
            }
          )
        }
      </Box>
      <Box sx={{display:"flex",justifyContent:"center"}}>
        <Fab size="small" aria-label="move" >
                <OpenWithIcon />
        </Fab>
      </Box>
      <Box >
        <TextField id="text" name="text" onChange={onChange} variant='outlined' multiline
                        maxRows={4} margin='normal' placeholder={placeholder} sx={{width:220,backgroundColor:"white",borderRadius:0}}/>

      
        <Box sx={{display:"flex",justifyContent:"center",gap:"1rem"}}>
            <Fab variant="extended" size="small" color="primary" aria-label="add" onClick={onClickRemoveAnswer}>
              <RemoveIcon sx={{ mr: 1 }} />
              削除
            </Fab>
            <Fab variant="extended" size="small" color="primary" aria-label="add" onClick={onClickAddAnswer}>
              <AddIcon sx={{ mr: 1 }} />
              追加
            </Fab>
        </Box>
      </Box>

      <Box className="outputHandleContainer" sx={{ display: "flex",justifyContent: "space-around",}}>
        {Array(answerHandleCount).fill().map((_,i)=>{
           return(
             <AnswerHandle num={i} key={`${nodeId}output${i}`} nodeId={nodeId}/>
              )
            }
          )
        }
      </Box>
    </Box>
      );
  }

export default QuestionNode;
