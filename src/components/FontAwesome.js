import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAppleAlt, faMicroscope } from '@fortawesome/free-solid-svg-icons'

const FontAwesome = () => {
    
    const mystyle={
        fontSize:"50px", 
        marginTop:"10px", 
        marginLeft:"20px"
    }

    return(
        <div>
            <strong className="heading"> Font Awesome </strong> <br />
            <FontAwesomeIcon icon={faCoffee} style={mystyle}/> 
            <FontAwesomeIcon icon={faAppleAlt} style={mystyle}/> 
            <FontAwesomeIcon icon={faMicroscope} style={mystyle}/> 
        </div>
    )
}

export default FontAwesome;