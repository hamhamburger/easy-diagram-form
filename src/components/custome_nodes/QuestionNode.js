
import { useCallback } from 'react';
import { Position, useUpdateNodeInternals} from 'react-flow-renderer';
import { Box, TextField,Fab,Container} from '@mui/material';

import OpenWithIcon from '@mui/icons-material/OpenWith';


import BottomHandle from '../handles/BottomHandle';
import TopHandle from '../handles/TopHandle';




const QuestionNode = ({ data,id}) => {
  const {label,first} = data

  const nodeId = id
  const updateNodeInternals = useUpdateNodeInternals();
  console.log(data)
  const placeholder = first ? 'ここを起点に別の質問へと分岐します\n最初の質問を入力して下さい' : "質問を入力して下さい"


  const handle = first ? null : <TopHandle type="target" position={Position.Top}/>
  const onChange = useCallback((evt) => {
    data.label = evt.target.value;
  }, []);

  return (
    <Box className="question-node" >
      {handle}
      
   


      <Box >
        <TextField id="text" name="text" onChange={onChange} variant='outlined' multiline
                        maxRows={4} margin='normal' placeholder={placeholder} sx={{width:220,backgroundColor:"white",borderRadius:0}}/>
      </Box>

      <BottomHandle type="source" position={Position.Bottom}/>

    </Box>
      );
  }

export default QuestionNode;
