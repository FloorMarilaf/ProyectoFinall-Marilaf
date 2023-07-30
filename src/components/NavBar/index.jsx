import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CartWidget from '../CartWidget';
import logo from './assets/logo2.png';
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {
  return (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" justifyContent= {'spacce-around'} sx={{backgroundColor:'#8ebb90'}}>
      <Toolbar display={'flex'} justifyContent={'start'} flexDirection= {'row'} gap ={7}>
        <Box display={'flex'} justifyContent={'space-around'} flexDirection={'row'} gap={7}>
        <Link to= '/'> <img src={logo} alt="logo"/>
        </Link>
        </Box>
        
        <Box> 
          <CartWidget />
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default NavBar;