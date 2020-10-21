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
        {this.state.number}
        <button onClick={()=>{this.setState({number: 10})}}> Click Me </button>
      </div>
    )
  }
}

export default ClassPureComponent;
