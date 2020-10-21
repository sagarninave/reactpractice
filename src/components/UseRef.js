import React from 'react';

class UseRef extends React.Component{

  constructor(){
    super()
    this.state={
      promoCode : 124647
    }
    this.userRef = React.createRef();
  }

  Value(){
    // console.log(this.userRef)
    this.userRef.current.value = this.state.promoCode;
    // this.userRef.current.focus();
  }

  render(){
    return(
      <div>
          <input ref={this.userRef} type="text" placeholder="Promo Code" autoFocus/> <br/>
          <span> Promo Code : {this.state.promoCode}</span> <br/>
          <button onClick={() => this.Value()}> Apply Promo Code </button>
      </div>
    )
  }
}

export default UseRef;