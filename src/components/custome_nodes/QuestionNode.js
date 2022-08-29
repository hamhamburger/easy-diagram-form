
import { useState } from 'react';
import { Handle, Position, useUpdateNodeInternals} from 'react-flow-renderer';

const handleContainerStyle = {
  display: "flex",
  justifyContent: "space-around"
}
const handleStyle = {
  position: "static"
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
    <Handle type="source" position={Position.Bottom} id={`out${num}`} onConnect={onConnect} style={handleStyle} isValidConnection={isValid} />
    </div>
  )
}
const InputHandle = ({num,onConnect}) => {
  return(
    <Handle type="target" position={Position.Top} id={`in${num}`} onConnect={onConnect} style={handleStyle}/>
  )
}


const QuestionNode = ({ data,id }) => {
  const {body} = data
  const inputHandleCount = 4
  const [answerHandleCount,setAnswerHandleCount] = useState(2)
  const nodeId = id
  const updateNodeInternals = useUpdateNodeInternals();


  const onClickAddAnswer = (evt) => {
    setAnswerHandleCount(answerHandleCount+1)
    updateNodeInternals(nodeId)
  }
  const onClickRemoveAnswer = (evt) => {
    if(answerHandleCount > 1){
      setAnswerHandleCount(answerHandleCount-1)
      updateNodeInternals(nodeId)
    }
  }


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
      <p>{body}</p>
      <div className='outputButtonContainer'>
        <button onClick={onClickAddAnswer}>AddOut</button>
        <button onClick={onClickRemoveAnswer}>RemoveOut</button>
      </div>

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
