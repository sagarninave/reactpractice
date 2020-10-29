import React, { PureComponent} from 'react';

class ClassPureComponent extends React.Component{

  constructor(){
    super()
    this.state = {
      number : 10
    }
  }

  render(){
    console.log(this.state)
    return(
      <div>
        <strong className="heading"> Pure Component </strong> <br/>
        {this.state.number} <br/>
        <button onClick={()=>{this.setState({number: 10})}}> Click Me </button>
      </div>
    )
  }
}

export default ClassPureComponent;
