
import { useCallback ,memo} from 'react';
import { Position } from 'react-flow-renderer';
import { Box, TextField } from '@mui/material';



import BottomHandle from '../handles/BottomHandle';
import TopHandle from '../handles/TopHandle';




// @ts-expect-error TS(2339): Property 'data' does not exist on type '{}'.
const QuestionNode = memo(({ data,id}) => {
  const {first} = data
  const placeholder = first ? 'この質問を起点に別の質問へと分岐していきます\n最初の質問を入力して下さい' : "質問を入力して下さい"


  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const handle = first ? null : <TopHandle type="target" position={Position.Top}/>
  const onChange = useCallback((evt: any) => {
    data.label = evt.target.value;
  }, [data]);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Box className="question-node" >
      {handle}
      
   


      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Box >
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TextField id="text" name="text" onChange={onChange} variant='outlined' multiline
                        maxRows={12} minRows={4} margin='normal' placeholder={placeholder} sx={{width:220,backgroundColor:"white",borderRadius:0}} inputProps={{style:{textAlign:"center"}}}/>
      </Box>

      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <BottomHandle type="source" position={Position.Bottom}/>

    </Box>
      );
  })

export default QuestionNode;
