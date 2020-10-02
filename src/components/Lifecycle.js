import React from 'react';

class Lifecycle extends React.Component {
  constructor() {
    super();
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {    
    this.setState({      
      date: new Date()    
    });  
  }

  render() {
    return (
      <div>
        <p>Hello, world!</p>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Lifecycle;
