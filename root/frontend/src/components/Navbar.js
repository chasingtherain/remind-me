import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AndroidIcon from '@mui/icons-material/Android';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom:"25px" }}>
      <AppBar position="static">
        <Toolbar>
          <AndroidIcon fontSize='large' sx={{ mr: 2 }}/> 
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
            REMIND ME
          </Typography>
          {/* <Button color="inherit" variant="outlined" disabled>Login</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
