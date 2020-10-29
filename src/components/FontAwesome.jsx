import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAppleAlt, faMicroscope } from '@fortawesome/free-solid-svg-icons'

const FontAwesome = () => {
    return(
        <div>
            <strong className="heading"> Font Awesome </strong> <br />
            <FontAwesomeIcon style={{fontSize:"50px", marginTop:"10px", marginLeft:"10px"}} icon={faCoffee} /> 
            <FontAwesomeIcon style={{fontSize:"50px", marginTop:"10px", marginLeft:"10px"}} icon={faAppleAlt} /> 
            <FontAwesomeIcon style={{fontSize:"50px", marginTop:"10px", marginLeft:"10px"}} icon={faMicroscope} /> 
        </div>
    )
}

export default FontAwesome;