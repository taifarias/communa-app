import { Link } from 'react-router-dom';
import LogoImg from '../assets/logo.png';

const Navebar = () => {
    return (
        <nav style={styles.navbar}>
            <img src={LogoImg} alt="logo-communa" style={styles.logo} />
            <h2 style={styles.title}>
                Communa
            </h2>
            <h3 style={styles.link}>
                <Link to='/login'>Login</Link>
            </h3>
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
        margin: '0', // Remove margem adicional do h2
    },

    title: {
        textDecoration: 'none',

    }
};

export default Navebar;
