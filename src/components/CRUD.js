import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const axios = require('axios');

function CRUD(){

  const myStyle = {
    fontSize:"20px", 
    marginTop:"10px", 
    marginLeft:"30px",
  };

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
    gender:""
  });

  const [editUserValue, setEditUserValue] = useState({
    first_name:"", 
    last_name:"", 
    email:"", 
    mobile:"", 
    dob:"", 
    gender:""
  });

  const [allUsers, set_allUsers] = useState();
  const [isShowUser, set_isShowUser] = useState(true);
  const [isCreateUser, set_isCreateUser] = useState(false);
  const [isEditUser, set_isEditUser] = useState(false);
  const [editUserId, set_editUserId] = useState();

  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = () => {
    try{
      axios({
        method: 'get',
        url: 'http://localhost:3030/users',
      }).then(response => {
        set_allUsers(response.data);
      })    
    }
    catch(e){
      console.log(e);
    }
  }

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
    else{ }
  }

  function submitForm(e){
    e.preventDefault();
    try{
      axios({
        method: 'post',
        url: 'http://localhost:3030/users',
        data: value,
      }).then(response => {
        set_isCreateUser(false);
        set_isShowUser(true);
        getUsers();
      })    
    }
    catch(e){
      console.log(e);
    }
  }

  const createUserView = () => {
    set_isShowUser(false);
    set_isCreateUser(true);
    set_isEditUser(false);
  }

  const showUserView = () => {
    set_isShowUser(true);
    set_isCreateUser(false);
    set_isEditUser(false);
  }

  const editUserView = (userID) => {
    set_isShowUser(false);
    set_isCreateUser(false);
    set_isEditUser(true);
    try{
      axios({
        method: 'get',
        url: 'http://localhost:3030/users/'+userID,
      }).then(response => {
        let user = response.data;
        set_editUserId(user.id);
        setEditUserValue({
          first_name:user.first_name,
          last_name:user.last_name,
          email:user.email,
          mobile:user.mobile,
          dob:user.dob,
          gender:user.gender
        });
      })    
    }
    catch(e){
      console.log(e);
    }
  }

  const handleEditInput = (e) => {
    if(e.target.name === "first_name"){
      setEditUserValue({...editUserValue, first_name: e.target.value});
    }
    else if(e.target.name === "last_name"){
      setEditUserValue({...editUserValue, last_name: e.target.value});
    }    
    else if(e.target.name === "email"){
      setEditUserValue({...editUserValue, email: e.target.value});
    }    
    else if(e.target.name === "mobile"){
      setEditUserValue({...editUserValue, mobile: e.target.value});
    }    
    else if(e.target.name === "gender"){
      setEditUserValue({...editUserValue, gender: e.target.value});
    }    
    else if(e.target.name === "dob"){
      setEditUserValue({...editUserValue, dob: e.target.value});
    }    
    else{ }
  }

  const userEditForm = (e) => {
    e.preventDefault();
    try{
      axios({
        method: 'put',
        url: 'http://localhost:3030/users/'+editUserId,
        data: editUserValue,
      }).then(response => {
        getUsers();
        set_isEditUser(false);
        set_isShowUser(true);
      })    
    }
    catch(e){
      console.log(e);
    }

  }

  const deleteUser = (userID) => {
    try{
      axios({
        method: 'delete',
        url: 'http://localhost:3030/users/'+userID,
      }).then(response => {
        getUsers();
      })    
    }
    catch(e){
      console.log(e);
    }
  }

  return(
    <div className="container">
      <strong className="heading"> CRUD Operation </strong>
      <div>
        <button onClick={showUserView}> Show Users</button>
        <button onClick={createUserView}> Create User</button>
      </div>
      { isShowUser && 
        <div className="row" style={{margin:"0px", padding:"0px"}}>
          <div className="col-md-12" style={{margin:"0px", padding:"0px"}}>
            <div className="row" style={{margin:"0px", padding:"0px"}}>
              <div className="col-md-1" style={{margin:"0px", padding:"0px"}}> ID </div>
              <div className="col-md-1" style={{margin:"0px", padding:"0px"}}> Fname </div>
              <div className="col-md-1" style={{margin:"0px", padding:"0px"}}> Lname </div>
              <div className="col-md-2" style={{margin:"0px", padding:"0px"}}> Email </div>
              <div className="col-md-2" style={{margin:"0px", padding:"0px"}}> Mobile </div>
              <div className="col-md-2" style={{margin:"0px", padding:"0px"}}> DoB </div>
              <div className="col-md-1" style={{margin:"0px", padding:"0px"}}> Gender </div>
              <div className="col-md-2" style={{margin:"0px", padding:"0px"}}> Action </div>
            </div>
            { allUsers ?
              Object.values(allUsers).map((user, index) => {
                return(
                  <div className="row" key={index}>
                    <div className="col-md-1" style={{margin:"0px", padding:"0px"}}> {user.id} </div>
                    <div className="col-md-1" style={{margin:"0px", padding:"0px"}}> {user.first_name} </div>
                    <div className="col-md-1" style={{margin:"0px", padding:"0px"}}> {user.last_name} </div>
                    <div className="col-md-2" style={{margin:"0px", padding:"0px"}}> {user.email} </div>
                    <div className="col-md-2" style={{margin:"0px", padding:"0px"}}> {user.mobile} </div>
                    <div className="col-md-2" style={{margin:"0px", padding:"0px"}}> {user.dob} </div>
                    <div className="col-md-1" style={{margin:"0px", padding:"0px"}}> {user.gender} </div>
                    <div className="col-md-2" style={{margin:"0px", padding:"0px"}}>             
                      <FontAwesomeIcon style={myStyle, {color:"green", marginRight:"10px"}} onClick={()=>editUserView(user.id)} icon={faEdit}/> 
                      <FontAwesomeIcon style={myStyle, {color:"red"}} icon={faTrash} onClick={()=>deleteUser(user.id)}/> 
                    </div>
                  </div>
                )
              }) : <p style={{marginTop:"100px", color:"blue", fontWeight:"bolder", fontSize:"30px"}}> Please Wait ... !</p>
            }
          </div>
        </div> 
      }
      
      {
        isCreateUser &&
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h3 style={{marginTop:'20px', marginBop: '20px'}}> Create User </h3>
            <form className="form-group" onSubmit={submitForm}>
              <br/><input type="text" name="first_name" placeholder="First Name" onChange={handleInput} className="form-input"></input>
              <br/><input type="text" name="last_name" placeholder="Last Name" onChange={handleInput} className="form-input"></input>
              <br/><input type="email" name="email" placeholder="Email" onChange={handleInput} className="form-input"></input>
              <br/><input type="text" name="mobile" placeholder="Mobile" onChange={handleInput} className="form-input"></input>
              <br/><input type="date" name="dob" placeholder="dob" onChange={handleInput} className="form-input"></input>
              <br/><select name="gender" onChange={handleInput}>
                <option> Gender </option>
                <option value="male"> Male </option>
                <option value="female"> Female </option>
              </select>
              <br/><button> Create </button>
            </form>
          </div> 
        </div>
      }

      {
        isEditUser &&
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h3 style={{marginTop:'20px', marginBottom: '0'}}> Edit User </h3>
            <form className="form-group" onSubmit={userEditForm}>
              <br/><input type="text" name="first_name" placeholder="First Name" value={editUserValue.first_name} onChange={handleEditInput} className="form-input"></input>
              <br/><input type="text" name="last_name" placeholder="Last Name" value={editUserValue.last_name} onChange={handleEditInput} className="form-input"></input>
              <br/><input type="email" name="email" placeholder="Email" value={editUserValue.email} onChange={handleEditInput} className="form-input"></input>
              <br/><input type="text" name="mobile" placeholder="Mobile" value={editUserValue.mobile} onChange={handleEditInput} className="form-input"></input>
              <br/><input type="date" name="dob" placeholder="dob" value={editUserValue.dob} onChange={handleEditInput} className="form-input"></input>
              <br/><select name="gender" value={editUserValue.gender} onChange={handleEditInput}>
                <option> Gender </option>
                <option value="male"> Male </option>
                <option value="female"> Female </option>
              </select>
              <br/><button> Edit </button>
            </form>
          </div> 
        </div>
      }
    </div>
  )
}
export default CRUD;