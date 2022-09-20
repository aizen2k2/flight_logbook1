import React from 'react'
import{Link} from 'react-router-dom'
const ErrorPage = () => {
  return (
    <>
    <div id="notfound">
    <div className='notfound'>
    <div className= " notfound-404">
        <h1>404</h1>
    </div>
    <h2>We are sorry, page not found!</h2> 
    <p className='mb-05'>The page you are looking for might have been moved, had its name changed or is temporarily unavailaible</p>
    <Link to='/' >Back to Homepage</Link>


    </div>


    </div>
    
    
    
    
    
    </>
  )
}

export default ErrorPage