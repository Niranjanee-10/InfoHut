
import React from 'react'
import { Button,TextField,Box } from '@mui/material'
import { Link } from 'react-router-dom'
import './login.css'
export default function() {
  return (
    <div>

        <form  action="http://localhost:3000/Pgmain" className='login'>
        <img src="lp.png"></img>
        <h1>Login</h1><br></br>
        <label>Email</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="email" 
        variant="outlined" type="text" required /><br />
        <br></br>
        <label>Password</label><br></br>
        <br></br>
        <TextField id ="outlined-basic"  label="password" variant="outlined" type="password" required/><br />
        <br></br>
        <br></br>
        <Box textAlign="center">
        <Button variant="contained" color="secondary" input type='submit' >LOGIN</Button>
        </Box>
        <br></br>
        <br></br>
        <br></br>
        <p><center>Don't have an Account? <Link to="/Pgsign">SignUp</Link></center></p>
        </form>

    </div>
  )
}
