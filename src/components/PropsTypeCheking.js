import React from 'react';
import PropTypes from 'prop-types';

export function PropsTypeToCheck(props){
  return(
    <div>
      <p> Name : {props.name} </p>
      <p> Age : {props.age} </p>
      <p> Today : {props.today} </p>
    </div>
  )
}

function PropsTypeCheking(){
  return(
    <div>
      <strong class="heading"> Lazy Loading </strong>
      <PropsTypeToCheck name={"Sagar Ninave"} age={24} today={new Date().toLocaleDateString()}/>
    </div>
  )
}

PropsTypeToCheck.propTypes = { 
  name : PropTypes.string,
  age: PropTypes.number,
  date: PropTypes.object
}

export default PropsTypeCheking;