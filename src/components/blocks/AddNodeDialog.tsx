import React,{memo,ReactNode,useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

interface Props{
 children: ReactNode;
 onClick: (str: string)=>unknown
}

const AddNodeDialog = memo(function AddNodeDialog({children, onClick}: Props){
  
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

        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          画面を追加する
        </DialogTitle>
   
        <DialogContent>

              <Button onClick={() =>  onClick("question")}>質問画面を追加する</Button>
    
          <Button onClick={() =>  onClick("result")}>結果画面を追加する</Button>
 
        <DialogActions>

      
          <Button onClick={handleClose}>閉じる</Button>
         
        </DialogActions>
        </DialogContent>

      </Dialog>
    </div>
  );
}
)
export default AddNodeDialog