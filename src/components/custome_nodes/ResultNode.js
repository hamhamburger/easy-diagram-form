import { TextField } from '@mui/material';
import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';

const handleStyle = { left: 10 };

    

function ResultNode({ data }) {
  const {label} = data
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
    data.label = evt.target.value;
  }, []);

  return (
    <div className="result-node">
      <Handle type="target" position={Position.Top} />
      <TextField id="text" name="text" onChange={onChange} ariant='outlined' multiline
                        maxRows={4} margin='normal' placeholder='メッセージを入力してください'/>


    </div>
  );
}
export default ResultNode;
