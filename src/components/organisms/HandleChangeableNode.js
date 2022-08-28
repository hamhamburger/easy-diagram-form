
import { useState } from 'react';
import { Handle, Position, useUpdateNodeInternals} from 'react-flow-renderer';

const buttonStyle = {
  backgroundColor:"#44c767",
  border:"1px solid #18ab29",
  display:"inline-block",
  cursor:"pointer",
  color:"#ffffff",
  fontFamily:"Arial",
  fontSize:"17px",
  padding:"10px 21px",
  width:"120px",
  textDecoration:"none",
  textShadow: "0px 1px 0px #2f6627"
}
const handleContainerStyle = {
  display: "flex",
  justifyContent: "space-around"
}
const handleStyle = {
  position: "static"
}


const OutputHandle = ({num,onConnect}) => {
  return(
    <Handle type="source" position={Position.Bottom} id={`out${num}`} onConnect={onConnect} style={handleStyle}/>
  )
}
const InputHandle = ({num,onConnect}) => {
  return(
    <Handle type="target" position={Position.Top} id={`in${num}`} style={handleStyle}/>
  )
}


const HandleChangeableNode = ({ data,id }) => {
  const [inputHandleCount,setInputHandleCount] = useState(1)
  const [outputHandleCount,setOutputHandleCount] = useState(1)
  const nodeId = id
  const updateNodeInternals = useUpdateNodeInternals();


  const onClickAddInput = (evt) => {
    setInputHandleCount(inputHandleCount+1)
    updateNodeInternals(nodeId)
  }
  const onClickRemoveInput = (evt) => {
    if(inputHandleCount > 1){
      setInputHandleCount(inputHandleCount-1)
      updateNodeInternals(nodeId)
    }
  }
  const onClickAddOutput = (evt) => {
    setOutputHandleCount(outputHandleCount+1)
    updateNodeInternals(nodeId)
  }
  const onClickRemoveOutput = (evt) => {
    if(outputHandleCount > 1){
      setOutputHandleCount(outputHandleCount-1)
      updateNodeInternals(nodeId)
    }
  }

  const connectHandler= (ev)=>{
    alert(`${ev.source} and ${ev.target} is connected!`)
  }


  return (
    <div className="handle-changeable-node">
      <div className="inputHandleContainer" style={handleContainerStyle}>
        {Array(inputHandleCount).fill().map((_,i)=>{
           return(
             <InputHandle num={i} key={`input${i}`}/>
              )
            }
          )
        }
      </div>
      <div className='inputButtonContainer'>
        <button style={buttonStyle} onClick={onClickAddInput}>AddIn</button>
        <button style={buttonStyle} onClick={onClickRemoveInput}>RemoveIn</button>
      </div>

      <div className='outputButtonContainer'>
        <button style={buttonStyle} onClick={onClickAddOutput}>AddOut</button>
        <button style={buttonStyle} onClick={onClickRemoveOutput}>RemoveOut</button>
      </div>

      <div className="outputHandleContainer" style={handleContainerStyle}>
        {Array(outputHandleCount).fill().map((_,i)=>{
           return(
             <OutputHandle num={i} key={`output${i}`} onConnect={connectHandler}/>
              )
            }
          )
        }
      </div>
    </div>
      );
  }

export default HandleChangeableNode;
