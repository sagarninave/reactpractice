import React from 'react';

export default class ErrorBoundry extends React.Component{

  constructor(props){
    super(props)
    this.state={
      error: null
    }
  }

  static getDerivedStateFromError(){
    return {error:true}
  }

  render(){
    return(
      <div>
        { this.state.error ? "Error Boundry" : this.props.children }
      </div> 
    )
  }
}