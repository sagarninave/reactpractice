import React from 'react';
import './App.css';
import FunctionComponent, { ClassComponent } from './components/Components';
import FunctionalProps, { FunctionDetailedProps, ClassProps } from './components/Props'
import AnonymousFunction from './components/AnonymousFunction';
import FunctionalState , { ClassState } from './components/States';
import ChangeFunctionalStateData, { ChangeClassStateData } from './components/ChangeStateData';
import Lifecycle from './components/Lifecycle';
import Event from './components/EventHandling';
import FunctionalUseEffect, { ClassUseEffect } from './components/UseEffect';
import FunctionalFragment1, { FunctionalFragment2, FunctionalFragment3, ClassFragment  } from './components/Fragment';
import MapFunction from './components/MapFunction';
import Stylesheet from './components/Stylesheet';
import FunctionalForm, { ClassForm } from './components/Forms';

function App() {

  const name = <h1 style={{display:"inline"}}> Sagar </h1>
  
  return (
    <div className="App">

        <strong className="heading"> Dynamic Text Binding </strong>
        <p> Hello! <strong> {name} </strong></p>
        <hr/>
 
        <strong className="heading"> Functional Component </strong>
        <FunctionComponent />

        <strong className="heading"> Class Component </strong>
        <ClassComponent />
        <hr/>

        <strong className="heading"> Anonymous Function </strong> <br/>
        {AnonymousFunction("data title", "data description")}
        <hr/>

        <strong className="heading"> Functional Props </strong> <br/>
        <FunctionalProps name="sagar" last="ninave" />

        <strong className="heading"> Child Function Props </strong> <br/>
        <FunctionalProps name="vishal" last="">
          <span> user does not have last name </span> <br />
          <span> user is VVIP </span> <br/>
        </FunctionalProps> <br />

        <strong className="heading"> Detailed Function Props </strong> <br/>
        <FunctionDetailedProps/>

        <strong className="heading"> Class Props </strong> <br/>
        <ClassProps first_name="Sagar" last_name="Ninave"/>
        <hr/>

        <strong className="heading"> Events </strong> <br/>
        <Event/>
        <hr/>

        <strong className="heading"> Functional State </strong>
        <FunctionalState/>

        <strong className="heading"> Class State </strong>
        <ClassState/>
        <hr/>
        
        <strong className="heading"> Change Funmctional State Data </strong>
        <ChangeFunctionalStateData />

        <strong className="heading"> Change Class State Data </strong>
        <ChangeClassStateData />
        <hr/>

        <strong className="heading"> Lifecycle </strong>
        <Lifecycle/>
        <hr/>

        <strong className="heading"> Use Effect For Function </strong>
        <FunctionalUseEffect/>

        <strong className="heading"> Use Effect for Class </strong>
        <ClassUseEffect/>
        <hr/>

        <strong className="heading"> Funmctional Fragment  </strong>
        <FunctionalFragment1/>
        <FunctionalFragment2/>
        <FunctionalFragment3/>

        <strong className="heading"> Funmctional Fragment  </strong>
        <ClassFragment/>
        <hr/>

        <strong className="heading"> Map Function  </strong>
        <MapFunction/>
        <hr/>
        
        <strong className="heading"> CSS Stylesheet  </strong>
        <Stylesheet value={true}/>
        <hr/>

        <strong className="heading"> Functional Form </strong>
        <FunctionalForm/>
        <strong className="heading"> Class Form </strong>
        <ClassForm/>
        <hr/>
    </div>
  );
}

export default App;
