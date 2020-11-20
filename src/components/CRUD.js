import React, { useState } from 'react';
const axios = require('axios');

function Create(){

  // const [first_name, set_first_name] = useState();
  // const [last_name, set_last_name] = useState();
  // const [email, set_email] = useState();
  // const [mobile, set_mobile] = useState();
  // const [dob, set_dob] = useState();
  // const [gender, set_gender] = useState();
  // const [password, set_password] = useState();
  const [value, setValue] = useState({
    first_name:"", 
    last_name:"", 
    email:"", 
    mobile:"", 
    dob:"", 
    gender:"", 
    password:""
  });
  const [submitResponse, set_submitResponse] = useState();

  const handleInput = (e) => {
    if(e.target.name === "first_name"){
      setValue({...value, first_name: e.target.value});
    }
    else if(e.target.name === "last_name"){
      setValue({...value, last_name: e.target.value});
    }    
    else if(e.target.name === "email"){
      setValue({...value, email: e.target.value});
    }    
    else if(e.target.name === "mobile"){
      setValue({...value, mobile: e.target.value});
    }    
    else if(e.target.name === "gender"){
      setValue({...value, gender: e.target.value});
    }    
    else if(e.target.name === "dob"){
      setValue({...value, dob: e.target.value});
    }    
    else if(e.target.name === "password"){
      setValue({...value, password: e.target.value});
    }
    else{ }
  }

  function submitForm(e){
    e.preventDefault();
    console.log("Form Value : ", value);
    try{
      axios({
        method: 'post',
        url: 'http://localhost:3030/user/',
        data: value,
        headers : {"Access-Control-Allow-Origin": "*"}
      }).then(response => {
        console.log("Response : ", response);
        set_submitResponse(response);
      })    
    }
    catch(e){
      console.log(e);
    }
  }

  return(
    <div className="container">
      <strong className="heading"> CRUD Operation </strong>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {
            submitResponse && 
            <p>
              <span> Record save successfully </span>
              {submitResponse}
            </p>
          }
          <form className="form-group" onSubmit={submitForm}>
            <br/><input type="text" name="first_name" placeholder="First Name" onChange={handleInput} className="form-input"></input>
            <br/><input type="text" name="last_name" placeholder="Last Name" onChange={handleInput} className="form-input"></input>
            <br/><input type="email" name="email" placeholder="Email" onChange={handleInput} className="form-input"></input>
            <br/><input type="text" name="mobile" placeholder="Mobile" onChange={handleInput} className="form-input"></input>
            <br/><input type="date" name="dob" placeholder="dob" onChange={handleInput} className="form-input"></input>
            <br/><select name="gender" onChange={handleInput}>
              <option> Male </option>
              <option> Female </option>
            </select>
            <br/><input type="password" name="password" placeholder="Password" onChange={handleInput} className="form-input"></input>
            <br/><button> Create Account </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Create;