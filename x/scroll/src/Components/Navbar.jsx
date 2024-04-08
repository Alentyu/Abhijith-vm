import { AppBar, Toolbar, Button,  } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <br /><br />
        <br /><br />
        <AppBar>
            <Toolbar>
            <Button variant="contained"><Link to={'/Home'}>
            Home </Link></Button>&nbsp;&nbsp;&nbsp;
            <Button variant="contained">
            <Link to={'/Add'}>
                Add</Link></Button>&nbsp;
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar