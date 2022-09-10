import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { List, Drawer, Toolbar, Box, AppBar, Typography } from "@mui/material";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InfoIcon from "@mui/icons-material/Info";
import ListItem from "@mui/material/ListItem";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
interface BarProps {
  text: string;
  children: JSX.Element;
  to: string;
}

const Bar = ({ text, children, to }: BarProps): JSX.Element => {
  return (
    <Link to={`/${to}`} style={{ textDecoration: "none", color: "black" }}>
      <ListItem key={text} disablePadding>
        <ListItemButton>
          <ListItemIcon>{children}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default function Header(): JSX.Element {
  const [open, setOpen] = useState(false);

  const list = (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={() => setOpen(false)}
      onKeyDown={() => setOpen(false)}
    >
      <List>
        <Bar text="フォームを作る" to="create">
          <NoteAddIcon />
        </Bar>
        <Bar text="使い方" to="help">
          <QuestionMarkIcon />
        </Bar>
        <Bar text="このサイトについて" to="about">
          <InfoIcon />
        </Bar>
        <Bar text="公開フォーム" to="open_form">
          <FormatListBulletedIcon />
        </Bar>
      </List>
    </Box>
  );

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
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Formula
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer open={open} onClose={() => setOpen(false)}>
        {list}
      </Drawer>
    </Box>
  );
}
