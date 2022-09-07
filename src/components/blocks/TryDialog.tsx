import React,{memo,useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AnswerPage from '../pages/AnswerPage.js'
import AnswerForm from './AnswerForm.js';


const TryDialog = memo(({children,questions}) => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
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