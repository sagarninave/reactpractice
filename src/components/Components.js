import React from 'react'; 

function FunctionComponent(){
  return(
    <div>
      <p> Hello! Functional Component</p>
    </div>
  )
}

export default FunctionComponent;


export class ClassComponent extends React.Component{
  render(){
    return(
      <div>
        <p> Hello! Class Component </p>
      </div>
    )
  }
}