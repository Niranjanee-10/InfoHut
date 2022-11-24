import React,{useState} from 'react';
import { AppBar,Toolbar,Tabs,Tab,Typography,Button} from '@mui/material';
//import logo from './logo.png';
import {Link} from 'react-router-dom';
//import './header.css';
function HeaderComponent() {
  const [count, setCount] = useState();
  return (
    <React.Fragment>
    <AppBar sx={{backgroundColor:"white"}}>
    <Toolbar>
    
    <h1>🏠Info Hut</h1>
    <Tabs sx={{marginLeft:'auto'}}  value={count} onChange={(e,count) => setCount(count)} textColor= 'purple'>
    <Link to="/Home"><Tab label="⌂ Home" sx={{color:'purple',textDecoration:'none'}}/></Link>
    <Link to="/Aboutus"><Tab label="🏆About Us" sx={{color:'purple',textDecoration:'none'}}/></Link>
    <Link to="/Pglog"><Tab label="✍Login/SignUp" sx={{color:'purple',textDecoration:'none',}} /></Link>
    </Tabs>
    
    </Toolbar>
    </AppBar>
    </React.Fragment>
  )
}

export default HeaderComponent