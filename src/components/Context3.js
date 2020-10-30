import React from 'react';

const MySimpleContext = React.createContext();
const MyNestedContext = React.createContext();

const ParentContext = () => {

  const firstName = "Sagar";
  const lastName = "Ninave";

  return (
    <div>
      <strong className="heading"> Context API </strong> <br />

      <MySimpleContext.Provider value={firstName}>
        <MyNestedContext.Provider value={lastName}>
          <ChildContext />
        </MyNestedContext.Provider>
      </MySimpleContext.Provider>
      
    </div>
  )
}
export default ParentContext;

export const ChildContext = () => {
  const first_name = React.useContext(MySimpleContext)
  const last_name = React.useContext(MyNestedContext)
  return (
    <div>
      <em> {first_name} {last_name} </em> <br />
      
    </div>
  )
}