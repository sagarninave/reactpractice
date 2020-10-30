import React from 'react';

export const MySimpleContext = React.createContext();

const SimpleContext = () => {
  const name="sagar";
  return(
    <div>
      <strong className="heading"> Context API </strong> <br/>
      <em> Context Provider </em> <br/>
      <MySimpleContext.Provider value={name}>
        <SimpleContextConsumer/>
      </MySimpleContext.Provider>
    </div>
  )
} 
export default SimpleContext;

export const SimpleContextConsumer = () => {
  return(
    <div>
      <em> Context Consumer </em> <br/>
      <MySimpleContext.Consumer>
        {
          value => (
            <h4> {value} </h4>
          )
        }
      </MySimpleContext.Consumer>
    </div>
  )
}