
import { useState,useCallback } from 'react';
import { Handle, Position, useUpdateNodeInternals} from 'react-flow-renderer';
import { Box } from '@mui/material';
import { handleStyle } from '../../css/handleStyle';
import InputHandle from '../handles/InputHandle';
const handleContainerStyle = {
  display: "flex",
  justifyContent: "space-around",


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



const QuestionNode = ({ data,id }) => {
  const {label} = data
  const inputHandleCount = 4
  const [answerHandleCount,setAnswerHandleCount] = useState(2)
  const nodeId = id
  const updateNodeInternals = useUpdateNodeInternals();


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


  return (
    <div className="question-node">
      <div className="inputHandleContainer" style={handleContainerStyle}>
        {Array(inputHandleCount).fill().map((_,i)=>{
           return(
             <InputHandle num={i} key={`${nodeId}input${i}`} nodeId={nodeId}/>
              )
            }
          )
        }
      </div>
      <Box sx={{backgroundColor:"rgb(66, 165, 245)",boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px",textAlign:"center",maxWidth:"20rem"}}>
        <p>{label}</p>
        <div className='outputButtonContainer'>
          <button onClick={onClickRemoveAnswer}>RemoveOut</button>
          <button onClick={onClickAddAnswer}>AddOut</button>
        </div>
      </Box>

      <div className="outputHandleContainer" style={handleContainerStyle}>
        {Array(answerHandleCount).fill().map((_,i)=>{
           return(
             <AnswerHandle num={i} key={`${nodeId}output${i}`} nodeId={nodeId}/>
              )
            }
          )
        }
      </div>
    </div>
      );
  }

export default QuestionNode;
