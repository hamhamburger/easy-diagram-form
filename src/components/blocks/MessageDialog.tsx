import React from "react";

import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
} from "@mui/material";

interface Props {
  isOpen: boolean;
  url?: string;
  message: string

  onClick: () => void;
}

const MessageDialog = ({ isOpen, message,url, onClick }: Props): JSX.Element => {


  return (
    
    <Dialog open={isOpen}>
      <DialogContent sx={{ whiteSpace: "pre-wrap" }}>
        <p>{message}</p>

        <a href={url} target="_blank" rel="noreferrer">
          {url}
        </a>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClick}>閉じる</Button>
      </DialogActions>
    </Dialog>
  );
};

export default MessageDialog