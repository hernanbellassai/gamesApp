import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/error.css";

function Error() {
  return (
    <div className='componente5'>
      
      
       <Link to={"/"}>
        <button className='btn'>try this!</button>
       </Link>

     <h1 className='error'> 404 Error</h1>

      </div>
  )
}

export default Error