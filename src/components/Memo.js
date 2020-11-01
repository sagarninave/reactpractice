import React, { memo, useState } from 'react';
import FunctionalChildMemo from './FunctionalChildMemo';

// function FunctionalMemo(){

//   const [number, setNumber] = React.useState(10);

//   // useState(() => {
//   //  setInterval(() => {
//   //   setNumber(number + 1)
//   //    console.log("Parent Memo useEffect : ", number)
//   //  }, 1000) 
//   // })

//   console.log("Memo Parent : ", number);

//   return(
//     <div>
//       <strong className="heading"> Memo</strong> <br/>
//       <button onClick={()=>{setNumber(number)}}> Click Count {number}</button>
//       <FunctionalChildMemo number={number}/>
//     </div>
//   )
// }

// export default FunctionalMemo;


class FunctionalMemo extends React.Component{
  
  constructor(){
    super()
    this.state = {
      number : 10
    }
  }

  render(){
    console.log("Pure Component Example : ", this.state.number);
    return(
      <div>
        <strong className="heading"> Pure Component </strong> <br/>
        <button onClick={()=>{this.setState({number: this.state.number})}}> Click Me {this.state.number}</button>
        <FunctionalChildMemo number={this.state.number}/>

      </div>
    )
  }
}
export default FunctionalMemo;