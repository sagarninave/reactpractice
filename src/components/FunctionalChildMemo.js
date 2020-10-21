import React, { memo } from 'react';

function FunctionalChildMemo(props){

  console.log(props.data);
  return(
    <div>
      <span> Child Value : {props.data}</span>
    </div>
  )
}

// export default FunctionalChildMemo; 

export default memo(FunctionalChildMemo); 