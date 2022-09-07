import React,{memo,useState,forwardRef} from 'react';

import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button} from '@mui/material'


const MessageDialog = ({
  isOpen,
  message,
  onClick
}: any) => {
  


 
  const handleClose = () => {

  };
 
  return (
 
      
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Dialog open={isOpen} onClose={handleClose} >
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <DialogContent sx={{whiteSpace:"pre-wrap"}}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <p>{message.body}</p>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <a href={message.url} target="_blank" rel="noreferrer">{message.url}</a>
        </DialogContent>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <DialogActions>
          
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Button onClick={onClick}>閉じる</Button>
        </DialogActions>


      </Dialog>
   
  );
}

export default MessageDialog