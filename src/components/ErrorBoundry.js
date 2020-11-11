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

  componentDidCatch(error, info){
    console.log("Error : ", error);
    console.log("Info : ", info.componentStack);
  }

  render(){
    return(
      <div>
        { 
          this.state.error 
          ? <h1> Something Went Wrong ! </h1> 
          : this.props.children 
        }
      </div> 
    )
  }
}

export const ErrorFunction = () => {
  console.lo("It is an error");
  return(
    <div>
      <strong class="heading"> Error Boundry </strong> <br/>
      <h1> I am in Error Function </h1>
    </div>
  ) 
}