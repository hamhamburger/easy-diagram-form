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
  const switchBar = (text: string, index: number): JSX.Element => {
    switch (index) {
      case 0:
        return (
          <Bar text="フォームを作る" to="create" key={index}>
            <NoteAddIcon />
          </Bar>
        );

      case 1:
        return (
          <Bar text="使い方" to="help" key={index}>
            <QuestionMarkIcon />
          </Bar>
        );

      case 2:
        return (
          <Bar text="このサイトについて" to="about" key={index}>
            <InfoIcon />
          </Bar>
        );

      default:
        return <></>;
    }
  };

  const list = (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={() => setOpen(false)}
      onKeyDown={() => setOpen(false)}
    >
      <List>
        {["フォームを作る", "使い方", "このサイトについて"].map((text, index) =>
          switchBar(text, index)
        )}
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
