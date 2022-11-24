import React, { Component } from 'react'
import Class2 from './Class2'

export default class Class1 extends Component {
    constructor(props){
        super(props)
        console.log("1 Constructor")
        this.state={name:"jane"};
    }
    static getDerivedStateFromProps(props,state){
        console.log("1 getDerived")
    }
    componentDidMount(){
        console.log("1 component mount")
    }shouldComponentUpdate()
    {
      console.log("Class1 shouldComponentUpdate")
      return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
      console.log("Class1 getSnapshotBeforeUpdate")
      return null;
    } 
    componentDidUpdate()
    {
      console.log("Class1 componentDidUpdate")
    }
    changeMyState=()=>{
      this.setState({
        name:"Niranjanee"
      })
    }
      render() {
        console.log("Class1 Render method")
        console.log(this.state.name)
        return (
          <div>
                <div>In Class 1</div>
                <button onClick={this.changeMyState}>Change State</button>
              <Class2/>
          </div>
          )
      }
    }
    
 /*render() {
    console.log("1 render")
    return (
        <div>
      <div>class1</div>
    <Class2/>
    </div>
    )
  }
}*/
