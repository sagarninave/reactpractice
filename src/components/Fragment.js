import React, { Fragment } from 'react';

function FunctionalFragment1(){
  return(
    <React.Fragment>
      <p> Functional Fragment 1 </p>
    </React.Fragment>
  )
}

export default FunctionalFragment1;

export function FunctionalFragment2(){
  return(
    <Fragment>
      <p> Functional Fragment 2 </p>
    </Fragment>
  )
}

export function FunctionalFragment3(){
  return(
    <>
      <p> Functional Fragment 3 </p>
    </>
  )
}

export class ClassFragment extends React.Component {

  render() {
    return (
      <React.Fragment>
        <p> Class Fragment </p>
      </React.Fragment>
    );
  }
}
