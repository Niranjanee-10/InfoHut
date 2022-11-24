import React, { Component } from 'react'

export default class Errorhandle extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
(error, info) {
        // Display fallback UI
        this.setState({ hasError: true });
        // You can also locomponentDidCatchg the error to an error reporting service
        console.log(error, info);
    }
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
  
      return  this.props.children; 
    }
  }