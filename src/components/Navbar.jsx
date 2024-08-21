
import React, { useContext } from 'react';
import { AuthContext } from '../context/Auth';
import { Link, useNavigate } from 'react-router-dom';
import LogoImg from '../assets/logo.png';

const Navebar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate(); 
  
    const handleLogout = () => {
      logout(); 
      navigate('/'); 
    };

    return (
        <nav  className='flex justify-between box-border w-screen overflow-x-hidden'>    
            <img src={LogoImg} alt="logo-communa" className='w-12' />

            <h2  className='text-2xl text-purple-600 font-bold pt-2'>
                Communa
            </h2>
           
            <div className='font-semibold text-purple-600 pt-3 mr-6 sm:mr-16 lg:text-xl'>
                {user ? (<button onClick={handleLogout}>Logout</button>) 
                      : ( <Link to="/loginform"> <button>Login</button> </Link>)
                }
            </div>
        </nav>
    );
};


export default Navebar;
