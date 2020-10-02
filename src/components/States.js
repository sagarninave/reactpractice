import React from 'react';

function FunctionalState(){

  const [myState] = React.useState({first_name : 'Sagar', last_name : 'Ninave'});

  return(
    <div>
      <p> Hello! {myState.first_name + " " + myState.last_name} </p>
    </div>
  )
}

export default FunctionalState;

export class ClassState extends React.Component{
  constructor(){
    super()
    this.state={
      first_name : 'Sagar',
      last_name : 'Ninave'
    };
  }

  render(){
    return(
      <div>
        <p> Hello! {this.state.first_name + " " + this.state.last_name}</p>
      </div>
    )
  }
}