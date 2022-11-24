
import React from 'react'
import { Button,TextField,Radio,RadioGroup,FormLabel,FormControl,FormControlLabel } from '@mui/material'
import { Home } from '@mui/icons-material'

export default function() {
  return (
    <div>
        <form>
        <h1>REGISTER HERE:)</h1>
            <label> Name:</label><br></br>
            <TextField id ="outlined-basic" label="name" variant="outlined" type="name"/><br />
            <label>Age:</label><br></br>
            <TextField id ="outlined-basic"  label="age" 
              variant="outlined" type="number"
            /><br />
            <label>Number:</label><br></br>
            <TextField id ="outlined-basic"  label="mobile/telephone" 
              variant="outlined" type="text"
            /><br />
            <label>E-mail:</label><br></br>
            <TextField id ="outlined-basic"  label="email" 
              variant="outlined" type="text"
            /><br />
            <label>Password:</label><br></br>
            <TextField id ="outlined-basic"  label="password" 
              variant="outlined" type="password"
            /><br />
            <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl>
          
            <br />


            <Button variant="contained" color="warning">SUBMIT</Button>

        </form>
    </div>
  )
}


