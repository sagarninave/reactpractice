import React, { memo } from 'react';
import FunctionalChildMemo from './FunctionalChildMemo';

function FunctionalMemo(){

  const [parentValue, setParentValue] = React.useState(1);
  const [childValue, setChildValue] = React.useState(10);

  return(
    <div>
      <FunctionalChildMemo data={childValue}/>
      <button onClick={()=>{setParentValue(parentValue+1)}}> Click Count : {parentValue}</button>
    </div>
  )
}

export default FunctionalMemo;
