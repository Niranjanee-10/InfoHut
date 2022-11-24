import React, { Component } from 'react'

export default class Class2 extends Component {
    constructor(props){
        super(props)
        console.log("2 Constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("2 getDerived")
    }
    componentDidMount(){
        console.log("2 component mount")
    }
  render() {
    console.log("2 render")
    return (
      <div>class2</div>
    
    )
  }
}