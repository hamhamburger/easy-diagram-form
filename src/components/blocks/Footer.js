import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import AddIcon from '@mui/icons-material/Add';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { useNavigate } from 'react-router-dom';

const Footer = ({onClickAdd})=>{
  const navigate = useNavigate()

  return (
      <Box sx={{ color: "#ebf6f7",
      backgroundColor: "#0f2350",
      width: "100%",
      position: "absolute",
      bottom: 0, 
      zIndex:10}}>


      <BottomNavigation
        showLabels

      >
        <BottomNavigationAction label="About" icon={<RestoreIcon />} 
        onClick={()=>navigate("/create")}/>
        <BottomNavigationAction label="作成する" icon={<AddIcon />}
          onClick={onClickAdd}/>
        <BottomNavigationAction label="Home" icon={<LocationOnIcon />} onClick={()=>navigate("/start")}/>
      </BottomNavigation>
    </Box>

  );

}

export default Footer