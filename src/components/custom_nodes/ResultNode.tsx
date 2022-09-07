import { TextField } from '@mui/material';
import { useCallback, memo } from 'react';
import { Position } from 'react-flow-renderer';
import TopHandle from '../handles/TopHandle';

    

// @ts-expect-error TS(2339): Property 'data' does not exist on type '{}'.
const ResultNode = memo(({ data }) => {

  const onChange = useCallback((evt: any) => {
    data.label = evt.target.value;
  }, []);

  const handleContainerStyle = {
    display: "flex",
    justifyContent: "space-around",
  
  
  }
  

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="result-node">
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="inputHandleContainer" style={handleContainerStyle}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TopHandle type="target" position={Position.Top}/>
      </div>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <TextField id="text" name="text" onChange={onChange} ariant='outlined' multiline
                        maxRows={12} minRows={4}  margin='normal' placeholder='表示されるメッセージを入力してください' 
                        sx={{width:220,backgroundColor:"papayawhip",borderRadius:0}} inputProps={{style:{textAlign:"center",overflow: "hidden"}}}/>


    </div>
  );
})
export default ResultNode;
