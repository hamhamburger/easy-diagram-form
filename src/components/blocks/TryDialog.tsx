import React,{memo,useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// @ts-expect-error TS(6142): Module '../pages/AnswerPage.js' was resolved to '/... Remove this comment to see the full error message
import AnswerPage from '../pages/AnswerPage';
// @ts-expect-error TS(6142): Module './AnswerForm.js' was resolved to '/Users/u... Remove this comment to see the full error message
import AnswerForm from './AnswerForm';


// @ts-expect-error TS(2339): Property 'children' does not exist on type '{}'.
const TryDialog = memo(({children,questions}) => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div onClick={handleClickOpen}>{children}</div>
      
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Dialog open={open} onClose={handleClose} fullWidth >
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <DialogContent>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <DialogActions>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Button onClick={handleClose}>閉じる</Button>
        </DialogActions>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <DialogContentText>
          </DialogContentText>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <AnswerForm questions={questions} height={"85vh"}></AnswerForm>
        </DialogContent>

      </Dialog>
    </div>
  );
}
)
export default TryDialog