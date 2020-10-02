import React, { useState, useEffect } from 'react';

function FunctionalUseEffect() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> You clicked {count} times </button>
    </div>
  );
}

export default FunctionalUseEffect;


export class ClassUseEffect extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  componentDidMount(){    
    document.title = `You clicked ${this.state.count} times`;  
  }  
  
  componentDidUpdate(){    
    document.title = `You clicked ${this.state.count} times`;  
  }
  
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          You clicked {this.state.count} times        
        </button>
      </div>
    );
  }
}
