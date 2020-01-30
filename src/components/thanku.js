import React from 'react';
import {Link} from 'react-router-dom'

const thanks = () =>{
    return(
        <div className="alert alert-secondary" role="alert">
             Thanks for submiting the application
             <p><Link to="/">Home Page</Link></p>
        </div>
    )

}

export default thanks;