import React,{memo,useState,forwardRef} from 'react';

import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button} from '@mui/material'


const MessageDialog = ({isOpen,message,onClick}) => {
  


 
  const handleClose = () => {

  };
 
  return (
 
      
      <Dialog open={isOpen} onClose={handleClose} >
        <DialogContent sx={{whiteSpace:"pre-wrap"}}>
          <p>{message}</p>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={onClick}>閉じる</Button>
        </DialogActions>


      </Dialog>
   
  );
}

export default MessageDialog