import React, { Component } from 'react'
export default class Counter extends Component {
    constructor(){
    super();
    this.state={counter:0,name:"nit"};
    }
    handleclick(){
        this.setState(({counter})=>(
        {counter:counter+1}))
        //this.state.counter=this.state.counter+1;

    }
  render() {
    if(this.state.counter==5){
        throw new console.error("Reached 5 =>lucky path");
    }

    return (
      <div>Counter : {this.state.counter}
      <button onClick={this.handleclick.bind(this)}>Increment
      </button></div>
    );
  }
}