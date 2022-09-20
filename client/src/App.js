import React from 'react'
import Navbar from './components/Navbar' 
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Signup from './components/Signup'
import Logout from './components/Logout'
import ErrorPage from './components/ErrorPage'
import { Route, Routes } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import  {useReducer, createContext} from 'react'

import { initialState, reducer } from "./reducer/UseReducer";

export const UserContext = createContext();

const Routing = () => {
  return (
    <>
    
    
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element=  {<Logout />} />
      
      <Route path="*" element={<ErrorPage/>}/>

    </Routes>
    
    </>
  )
}
const App = () => {

  //*  useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
   
      <UserContext.Provider value={{state, dispatch}}>
        
        <Navbar />
        <Routing />

      </UserContext.Provider>
  )
}

export default App;
