import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import AddIcon from '@mui/icons-material/Add';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { useNavigate } from 'react-router-dom';

const Footer = ()=>{
  const navigate = useNavigate()
  const [value, setValue] = React.useState(0);
  
  return (
      <Box sx={{ color: "#ebf6f7",
      backgroundColor: "#0f2350",
      width: "100%",
      position: "absolute",
      bottom: 0, 
      zIndex:10}}>


      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="About" icon={<RestoreIcon />} 
        onClick={()=>navigate("/home")}/>
        <BottomNavigationAction label="作成する" icon={<AddIcon />}
          onClick={()=>navigate("/create") }/>
        <BottomNavigationAction label="Home" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>

  );

}

export default Footer