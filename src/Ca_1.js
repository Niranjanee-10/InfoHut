import React from 'react'
import { Button,TextField} from '@mui/material'
import './ca.css'

const strong = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
const medium = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
const name=new RegExp("^(?=.*[a-z])(?=.*[A-Z])");
const mail = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

class Ca_1 extends React.Component {

    constructor() {
        super();
        this.state = {
            borderColor: "red"
        }
        this.analyze = this.analyze.bind(this);
        this.cname=this.cname.bind(this);
        this.cmail=this.cmail.bind(this);
    }
    cname(event){
        if(name.test(event.target.value)){
            this.setState({borderColor:"black"})
        }
    }
    cmail(event){
        if(mail.test(event.target.value)){
            this.setState({borderColor:"black"})
        }
    }

    analyze(event) {
         
            if(strong.test(event.target.value)) {
                this.setState({ borderColor: "#0F9D58" })
                this.setState("password is strong");
            
        

            } else if(medium.test(event.target.value)) {
                this.setState({ borderColor: "#F4B400" })
                this.setState("password is medium");
            } else {
                this.setState({ borderColor: "#DB4437" })
                this.setState("password is weak");
            }
        
    }
    render() {
        return (

    <div>
        <form className="login" >
        
        <h1>Login</h1><br></br>
        <label>Enter your username</label><br></br>
        <br></br>
        <p><input type="text" placeholder="your name" required style={{ borderColor: this.state.borderColor }} onChange={this.cname} /></p>
        <br></br>
        <label>Enter your email</label><br></br>
        <br></br>
        <p><input type="email" placeholder='your email' required style={{ borderColor: this.state.borderColor }} onChange={this.cmail}  /></p>
        <br></br>
        <label>Enter your password</label><br></br>
        <br></br>
        <p><input type="password" placeholder='your password'required style={{ borderColor: this.state.borderColor }} onChange={this.analyze} /></p>
        <br></br>
        <br></br>
        
        <Button variant="contained" color="primary" input type='submit' >LOGIN</Button>
        
        <br></br>
        
        </form>

    </div>
  )
        }
    }  
    export default Ca_1;  
    
    
    
