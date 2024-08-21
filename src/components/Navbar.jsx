
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
        <nav style={styles.navbar}>
            <img src={LogoImg} alt="logo-communa" style={styles.logo} />
            <h2 style={styles.title}>
                Communa
            </h2>
           
            <div style={styles.link}>
                {user ? (<button onClick={handleLogout}>Logout</button>) 
                      : ( <Link to="/loginform"> <button>Login</button> </Link>)
                }
            </div>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between', // Distribui os elementos ao longo do eixo horizontal
        alignItems: 'center', // Centraliza os itens verticalmente
        backgroundColor: 'rgba(248, 248, 248, 0.7)',
    },
    logo: {
        width: '50px',
    },
    link: {
        marginRight: '10px', // Remove margem adicional do h2
        textDecoration: 'none',
        fontWeight: '600',
        color: 'rgba(156, 56, 209, 0.91)',
    },

    title: {
        
        color: 'rgba(156, 56, 209, 1)',
        fontSize: '30px',
        fontWeight: '700'

    }
};

export default Navebar;
