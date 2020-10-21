import React from 'react';

class UseRef extends React.Component{

  constructor(){
    super()
    this.userRef = React.createRef();
  }

  Value(){
    this.userRef.current.value="1000";
    // console.log(this.userRef.current.value="1000");
  }

  render(){
    return(
      <div>
          <input type="text" ref={this.UserRef}/>
          <button onClick={() => this.Value()}> Click Me </button>
      </div>
    )
  }
}

export default UseRef;