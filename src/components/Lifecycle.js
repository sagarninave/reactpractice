import React, { useState, useEffect } from 'react';

class ClassTimerLifecycle extends React.Component {
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

export default ClassTimerLifecycle;

export class ClassLifeCycle_A extends React.Component{

  constructor(){
    super()

    this.state={
      name:""
    }
    console.log("LifeCycle A : constructor");
  }

  static getDerivedStateFromProps(props, state){
    console.log("LifeCycle A : getDerivedStateFromProps");
    return null;
  }

  componentDidMount(){
    console.log("LifeCycle A : componentDidMount");
  }

  render(){
    console.log("LifeCycle A : Render & Return");
    return(
      <div>
        <ClassLifeCycle_B/>
        <em> console.log("LifeCycle B : Render & Return") </em> <br/>
      </div>
    )
  }
}

export class ClassLifeCycle_B extends React.Component{

  constructor(){
    super()

    this.state={
      name:""
    }
    console.log("LifeCycle B : constructor");
  }

  static getDerivedStateFromProps(props, state){
    console.log("LifeCycle B : getDerivedStateFromProps");
    return null;
  }

  componentDidMount(){
    console.log("LifeCycle B : componentDidMount");
  }

  render(){
    console.log("LifeCycle B : Render & Return");
    return(
      <div>
        <em> console.log("LifeCycle B : Render & Return") </em> <br/>
      </div>
    )
  }
}

export class ClassLifeCycle_C extends React.Component{

  constructor(){
    super()

    this.state={
      count: 0
    }
    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state){
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount(){
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState){
    console.log("componentDidMount");
  }

  Increase = () => {
    this.setState({
      count:this.state.count + 1
    }); 
  }  

  render(){
    console.log("Render & Return");
    return(
      <div>
        <string> Count : {this.state.count}</string> <br/>
        <button onClick={this.Increase}>Plus</button>
      </div>
    )
  }
}

export class ClassLifeCycle_D extends React.Component {

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
        <TitleCount mycount={this.state.count}/>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          You clicked {this.state.count} times        
        </button>
      </div>
    );
  }
}


export class TitleCount extends React.Component{
  constructor(props){
    super(props)
    this.state={
      clickCount : 0
    }
  }

  componentDidMount(){    
    console.log("componentDidMount Called")
  }  

  static getDerivedStateFromProps(props, state){
    console.log("old", state.clickCount)
    console.log("new", props.mycount)
  }

  componentDidUpdate(){    
    console.log("componentDidUpdate Called")
  }

  render(){
    return(
      <div>
        <button onClick={() => this.setState({clickCount:this.state.clickCount + 1})}> 
          Click Count : {this.state.clickCount}
        </button>
      </div>
    )
  }
}

export function FunctionalLifeCycle() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> You clicked Functional Lifrecycle {count} times </button>
    </div>
  );
}