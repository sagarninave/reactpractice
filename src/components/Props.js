import React from 'react';

function FunctionProps(props){
  return (
    <div>
      <p> Hello! <strong> {props.name + " " + props.last} </strong></p>
      <em> <strong> {props.children} </strong> </em>
    </div>
  )
}
export default FunctionProps;


// Detailed Props

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img
      className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

export function FunctionDetailedProps() {

  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Sagar',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };

  return (
    <div className="Comment">
      <UserInfo user={comment.author} />
      <div className="Comment-text">{comment.text}</div>
      <div className="Comment-date">
        {formatDate(comment.date)}
      </div>
    </div>
  );
}


export class ClassProps extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      first_name : props.first_name,
      last_name : props.last_name,
      today : new Date()
    }
  }

  render(){
    return(
      <div>
        <p> Hello! <strong> {this.state.first_name + " " + this.state.last_name} </strong> </p>
        <em> {this.state.today.toLocaleDateString()}</em>
      </div>
    )
  }
}