import { TextField } from '@mui/material';
import { useCallback } from 'react';
import { Position } from 'react-flow-renderer';
import TopHandle from '../handles/TopHandle';

    

function ResultNode({ data }) {
  
  const onChange = useCallback((evt) => {
    data.label = evt.target.value;
  }, []);

  const handleContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
  
  
  }
  

  return (
    <div className="result-node">
      <div className="inputHandleContainer" style={handleContainerStyle}>
        <TopHandle type="target" position={Position.Top}/>
      </div>
      <TextField id="text" name="text" onChange={onChange} ariant='outlined' multiline
                        maxRows={12} minRows={4}  margin='normal' placeholder='表示されるメッセージを入力してください' 
                        sx={{width:220,backgroundColor:"white",borderRadius:0}} inputProps={{style:{textAlign:"center",overflow: "hidden"}}}/>


    </div>
  );
}
export default ResultNode;
