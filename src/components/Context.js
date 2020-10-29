import React from 'react';

export const MyContext = React.createContext();

const FunctionalContext = () => {
  const name="sagar";
  return(
    <div>
      <strong className="heading"> Context Provider </strong> <br/>
      <MyContext.Provider value={name}>
        <ContextConsumer/>
      </MyContext.Provider>
    </div>
  )
} 
export default FunctionalContext;

export const ContextConsumer = () => {
  return(
    <div>
      <strong className="heading"> Context Consumer </strong> <br/>
      <MyContext.Consumer>
        {
          ({value}) => (
            <h1> {value} </h1>
          )
        }
      </MyContext.Consumer>
    </div>
  )
}