import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom'
import {UserContext} from "../App";
import  { useContext } from "react";




            
    
    

const Navbar = () => {

  const { state, dispatch } = useContext(UserContext);
  console.log(`the navbar user ${state} and ${dispatch}`);
    
    const RenderList = () => {
      
        if (state) {
            return (
                <>
                     <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
          
        <li className="nav-item">
                        <Link exact activeClassName="active-page" className="nav-link" to="/logout">Logout</Link>
                    </li>
                    </>
                
            )
        } else {
            return (
                <>
                     <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
          
        <li className="nav-item">
                        <Link exact activeClassName="active-page" className="nav-link" to="/login">Login</Link>
                    </li>

                    <li className="nav-item">
                        <Link exact activeClassName="active-page" className="nav-link" to="/register">Registration</Link>
                    </li>
                      
                        
                    </>
            )
        }
    };


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="#">
                            
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  
                    <RenderList />
          
                  
                </ul>
                </div>
                </nav>
            </>
      
              
          
    )
}

export default Navbar
