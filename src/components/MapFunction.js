import React from 'react';
import { Country } from "../others/country";

function MapFunction(){
  const numbers = [0,1,2,3,4,5,6,7,8,9]
  const iterNum = numbers.map(num => {return( num )})
  return(
    <div style={{width:"100%", height:"200px", overflow:"scroll"}}>
      <p> { iterNum } </p>
      <table style={{textAlign : "left"}}>
        <tbody>
          {
            Country.map((element, index) => {
              return (
                <tr key={index}> 
                  <td> <strong> Country : </strong> {element.name} </td> 
                  <td> <strong> Capital : </strong> {element.capital} </td> 
                  <td> <strong> Currency : </strong>{element.currency} </td> 
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default MapFunction;
