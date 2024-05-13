import React, {useState, useNavigate} from 'react';
import {AppBar, Typography, Toolbar, Tabs, Tab} from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink } from 'react-router-dom';


const Header=() =>{

  const [activeValue, setActiveValue] = useState()

  const handleChange = (e, newValue) =>{
    setActiveValue(newValue)
  }
  return (
  
    <AppBar sx={{position:'sticky', backgroundColor:'primary'}}>
      <Toolbar>
      <Typography sx={{display: 'flex', alignItems: 'center'}}>
        <LibraryBooksIcon/>Books
      </Typography>

     <Tabs sx={{ml: 'auto'}} value={activeValue} textColor= "inherit" indicatorColor="primary" onChange={handleChange}>
        <Tab LinkComponent={NavLink} to ="/" label="Home"/>
        <Tab LinkComponent={NavLink} to ="/add" label="Add Books"/>
        <Tab LinkComponent={NavLink} to ="/books" label="Books"/>
        <Tab LinkComponent={NavLink} to ="/about" label="About"/>
     </Tabs>



      </Toolbar>
    </AppBar>
    
  );
}

export default Header;