import React,{useState} from 'react';
import { Link } from 'react-router-dom';
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


export default function Header({onButtonClick}) {
  


  const [open, setOpen] = useState(false);
  const switchIcon = (text,index) => {
    const style = { textDecoration: 'none' ,color:"black"}
    switch (index) {
      case 0:
        return (
          <Link to="/create" style={style}>
               <ListItem key={text} disablePadding>
                  <ListItemButton>
                      <ListItemIcon>

                        <NoteAddIcon />
                        
                      </ListItemIcon>
                      <ListItemText primary={text} />
                   </ListItemButton>
                </ListItem>
          </Link>)
 
        break;

      case 1:
        return (
          <Link to="/" style={style}>
               <ListItem key={text} disablePadding>
                  <ListItemButton>
                      <ListItemIcon>

                        <QuestionMarkIcon />
                        
                      </ListItemIcon>
                      <ListItemText primary={text} />
                   </ListItemButton>
                </ListItem>
          </Link>)
        break;
      case 2:
        return (
          <Link to="/about" style={style}>
               <ListItem key={text} disablePadding>
                  <ListItemButton>
                      <ListItemIcon>

                        <InfoIcon />
                        
                      </ListItemIcon>
                      <ListItemText primary={text} />
                   </ListItemButton>
                </ListItem>
          </Link>)
        break;
      default:
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
         
                 switchIcon(text,index)
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
            Formula
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
