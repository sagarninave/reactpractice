import React , { useState } from "react";

function FunctionalForm(){

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const getUsername = (event) => {
    setUsername(event.target.value);
  }

  const getPassword = (event) => {
    setPassword(event.target.value);
  }

  const submitForm = (e) =>{
    e.preventDefault();
    console.log("my form data is : " + username + " " + password);
  }

  return(
    <form onSubmit={submitForm}>
      <input type="text" placeholder="username" onChange={getUsername}></input>
      <input type="password" placeholder="password" onChange={getPassword}></input>
      <button> Submit </button>
    </form>
  )
}

export default FunctionalForm;


export class ClassForm extends React.Component{

  constructor(){
    super()
    this.state={
      username:"",
      password:""
    }
  }

  getUsername = (event) => {
    this.setState({username:event.target.value});
  }

  getPassword = (event) => {
    this.setState({password:event.target.value});
  }

  submitForm = (e) =>{
    e.preventDefault();
    console.log("my form data is : " + this.state.username + " " + this.state.password);
  }

  render(){
    return(
      <form onSubmit={this.submitForm}>
        <input type="text" placeholder="username" onChange={this.getUsername}></input>
        <input type="password" placeholder="password" onChange={this.getPassword}></input>
        <button> Submit </button>
      </form>
    )
  }
}