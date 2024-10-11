import React from 'react'
import Register from './Register'
import { useNavigate } from 'react-router-dom';

export default function Home() {


    const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/register'); 
  };

  const goToLogin = () => {
    navigate('/login'); 
  };
  return (
    <div className='container '>
        <h1>Home Page</h1>
 <button type='submit' className="btn btn-primary mt-4" onClick={goToLogin} >login</button>

<div>
    <h3 className='text mt-4'>Don't have an account ?</h3>
    <button type='submit' className="btn btn-primary mt-4 color:black" onClick={goToRegister} >Register</button>
 
    </div>
  
  </div>
  )
}
