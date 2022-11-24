import React from 'react'
import { Button,TextField,Box } from '@mui/material'
import { Link } from 'react-router-dom'
import './sign.css'
export default function() {
  return (
    <div>

        <form action="http://localhost:3000/Pgmain" className='signup'>
        
        <h1>Sign Up</h1><br></br>

        <label>Name </label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="name" 
        variant="outlined" type="text" required /><br />
        
        <label>DOB</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="dd/mm/yyyy" 
        variant="outlined" type="text" /><br />
        
        <label>Email </label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="email" 
        variant="outlined" type="text"  required/><br />
        
        <label>Password </label>
        <p className='p'>8 characters,1 special character,1 number is must</p>
        
        <TextField id ="outlined-basic"  label="password" variant="outlined" type="password" required/><br />
        
        <label>Confirm Password </label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="password" variant="outlined" type="password" required/><br />
        <br></br>
        <br></br>
        <Box textAlign='center'>
        <Button variant="contained" color="secondary" onClick={alert("Make sure you fill all the stared components")} input type="submit">SIGN UP</Button>
        </Box>
        <br></br>
        <br></br>
        <p ><center>Already a User?  <Link to="/Pglog">Login</Link></center></p>
        </form>

    </div>
  )
}