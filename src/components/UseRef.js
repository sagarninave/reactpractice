import React from 'react';

class UseRef extends React.Component{

  constructor(){
    super()
    this.state={
      promoCode : 124647
    }
    this.userRef = React.createRef();
  }

  Value(){
    // console.log(this.userRef)
    this.userRef.current.value = this.state.promoCode;
    // this.userRef.current.focus();
  }

  render(){
    return(
      <div>
          <input ref={this.userRef} type="text" placeholder="Promo Code" autoFocus/> <br/>
          <span> Promo Code : {this.state.promoCode}</span> <br/>
          <button onClick={() => this.Value()}> Apply Promo Code </button>
      </div>
    )
  }
}

export default UseRef;

export function UncontrolledComponent(){


  //Note : values are gatting directly  from HTML element so that it is called uncontrolled component

  const usernameRef = React.createRef();
  const passwordRef = React.createRef();

  const submitForm = (e) =>{
    e.preventDefault();
    console.log("Username : ", usernameRef);
    console.log("Username Current: ", usernameRef.current);
    console.log("Username Current Tag Name: ", usernameRef.current.tagName);
    console.log("Username Current Base URI: ", usernameRef.current.baseURI);
    console.log("Username Current Value: ", usernameRef.current.value);
    console.log("Username Current Type: ", usernameRef.current.type);
    console.log("Username Current Placeholder: ", usernameRef.current.placeholder);

    console.log("Password : ", passwordRef);
    console.log("Password Current: ", passwordRef.current);
    console.log("Password Current Tag Name: ", passwordRef.current.tagName);
    console.log("Password Current Base URI: ", passwordRef.current.baseURI);
    console.log("Password Current Value: ", passwordRef.current.value);
    console.log("Password Current Type: ", passwordRef.current.type);
    console.log("Password Current Placeholder: ", passwordRef.current.placeholder);
  }

  return(
    <form onSubmit={submitForm}>
      <strong className="heading"> Functional Form </strong><br/>
      <input type="text" placeholder="username" ref={usernameRef}></input><br/>
      <input type="password" placeholder="password" ref={passwordRef}></input><br/>
      <button> Submit </button>
    </form>
  )
}