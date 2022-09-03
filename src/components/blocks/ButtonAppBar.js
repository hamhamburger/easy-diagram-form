import React,{useState} from 'react';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { List, Drawer, Toolbar, Box, AppBar, Typography} from '@mui/material';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InfoIcon from '@mui/icons-material/Info';
import ListItem from '@mui/material/ListItem';


export default function ButtonAppBar({onButtonClick}) {
  


  const [open, setOpen] = useState(false);
  const switchIcon = (index) => {
    switch (index) {
      case 0:
        return <NoteAddIcon />
        break;

      case 1:
        return <QuestionMarkIcon /> 
        break;
      case 2:
        return <InfoIcon />
        break;
    }
  }

  const list = 
        <Box
        sx={{ width:  'auto'}}
        role="presentation"
        onClick={() => setOpen(false)}
        onKeyDown={() => setOpen(false)}
      >
        <List>
          {['フォームを作る','使い方','このサイトについて'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                 {switchIcon(index)}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
      </Box>
 



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            簡単フォーム(仮)
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
            
            open={open}
            onClose={() => setOpen(false)}
          >
            

          {list}

          </Drawer>
    </Box>
  );
}
