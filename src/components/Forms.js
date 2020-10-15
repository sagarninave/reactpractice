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

export function FunctionalValidForm(){

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [firstnameError, setFirstNameError] = useState(null);
  const [lastnameError, setLastNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);

  function valid(){
    if(firstname === "" && lastname === "" && email === ""){
      setFirstNameError("first name is empty");
      setLastNameError("last name is empty");
      setEmailError("Email is empty");
    }
    else if(firstname.length < 5 && lastname.length < 5 && email.length < 5){
      setFirstNameError("first name should be morth than 4");
      setLastNameError("last name is should be morth than 4");
      setEmailError("Email is should be morth than 4");
    }
    else{
      return true
    }
  }

  function SubmitForm(e){
    e.preventDefault()
    if(valid()){
      console.log(firstname, lastname, email)
    }
  }


  return(
    <div>
      <form>
        <input type="text" onChange={(e) => setFirstName(e.target.value)}></input><br/>
        <span> {firstname == "" ? firstnameError : null} </span><br/>

        <input type="text" onChange={(e) => setLastName(e.target.value)}></input><br/>
        <span> {lastname == "" ? lastnameError : null} </span><br/>

        <input type="text" onChange={(e) => setEmail(e.target.value)}></input><br/>
        <span> {email == "" ? emailError : null} </span><br/>

        <button onClick={SubmitForm}> Submit </button>
      </form>
    </div>
  )
}