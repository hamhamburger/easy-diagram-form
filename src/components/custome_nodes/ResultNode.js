import { TextField } from '@mui/material';
import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';

import { handleStyle } from '../css/handleStyle';
import InputHandle from '../handles/InputHandle';
    

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
        {Array(5).fill().map((_,i)=>{
           return(
             <InputHandle num={i} />
              )
            }
          )
        }
      </div>
      <TextField id="text" name="text" onChange={onChange} ariant='outlined' multiline
                        maxRows={4} margin='normal' placeholder='表示されるメッセージを入力してください' sx={{width:220,backgroundColor:"white",borderRadius:0}}/>


    </div>
  );
}
export default ResultNode;
