
import { useState } from 'react';
import { Handle, Position, useUpdateNodeInternals} from 'react-flow-renderer';

const handleContainerStyle = {
  display: "flex",
  justifyContent: "space-around"
}
const handleStyle = {
  position: "static"
}


const AnswerHandle = ({num,answer}) => {

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
    <Handle type="source" position={Position.Bottom} id={answer} onConnect={onConnect} style={handleStyle} isValidConnection={isValid} />
    <label>{answer}</label>
    </div>
  )
}
const InputHandle = ({num,onConnect}) => {
  return(
    <Handle type="target" position={Position.Top} id={`in${num}`} onConnect={onConnect} style={handleStyle}/>
  )
}


const QuestionNode = ({ data,id }) => {
  const {answers,body} = data
  const inputHandleCount = 4

  const nodeId = id
  const updateNodeInternals = useUpdateNodeInternals();



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
      <div className="outputHandleContainer" style={handleContainerStyle}>
        {answers.map((answer,i)=>{
           return(
             <AnswerHandle num={i} key={`${nodeId}output${i}`} nodeId={nodeId} answer={answer}/>
              )
            }
          )
        }
      </div>
    </div>
      );
  }

export default QuestionNode;
