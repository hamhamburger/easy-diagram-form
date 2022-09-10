import React,{memo,useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';


import AnswerForm from './AnswerForm';
import {Question} from 'components/interface'
interface Props{
  children: JSX.Element
  questions:Question[]
}
const TryDialog = memo(function TryDialog({children,questions}:Props) {

  const [open, setOpen] = useState(false);

  const handleClickOpen = ():void => {
    setOpen(true);
  };

  const handleClose = ():void => {
    setOpen(false);
  };

  return (

    <div>
      
      <div onClick={handleClickOpen}>{children}</div>
      
      
      <Dialog open={open} onClose={handleClose} fullWidth >
        
        <DialogContent>
        
        <DialogActions>
          
          <Button onClick={handleClose}>閉じる</Button>
        </DialogActions>
          
          <DialogContentText>
          </DialogContentText>
          
          <AnswerForm questions={questions} height={"85vh"}></AnswerForm>
        </DialogContent>

      </Dialog>
    </div>
  );
}
)
export default TryDialog