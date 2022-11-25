import React, { useState } from "react";
import validator from 'validator'
import './ca.css';
const App = () => {
 
    const [errorMessage, setErrorMessage] = useState('')
   
    const validate = (value) => {
   
      if (validator.isStrongPassword(value, {
        minLength: 8, minLowercase: 1,
        minUppercase: 1, minNumbers: 1, minSymbols: 1
      })) {
        setErrorMessage('Is Strong Password')
      } else {
        setErrorMessage('Is Not Strong Password')
      }
    }
   
    return (
      <div className="Log"> 
    <h1><center>LOGIN FORM !</center></h1>
        <label>Enter your username</label><br></br>
        <p><input type="text" placeholder="Your name" required /></p>
        <label>Enter your email</label><br></br>
        
        <p><input type="Email" placeholder='your email' required   /></p>
        
        <label>Enter your password</label><br></br>
       
        <input type="password" placeholder='your password' onChange={(e) => validate(e.target.value)}></input> <br />
        
          <span> {errorMessage}</span>
    
      </div>
    );
  }
   
  export default App