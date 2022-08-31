import { Handle, Position, useUpdateNodeInternals} from 'react-flow-renderer';
import { handleStyle } from '../../css/handleStyle';
const InputHandle = ({num,onConnect}) => {
  return(
    <Handle type="target" position={Position.Top} id={`in${num}`} onConnect={onConnect} style={handleStyle}/>
  )
}


export default InputHandle