import React,{memo,useState} from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const MessageDialog = ({message}) => {
  
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
 
      
      <Dialog open={open} onClose={handleClose} >
        <DialogContent>
        <DialogActions>
          <p>{message}</p>
        </DialogActions>
        </DialogContent>

      </Dialog>
   
  );
}

export default MessageDialog