import React, { useEffect, useState } from 'react';
import UserCard from "./UsersCard";
import axios from 'axios';

const Sidebar = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://randomuser.me/api/?results=25');
                console.log(response.data); // Aqui estamos exibindo a resposta no console
            
                setUsers(response.data.results);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <div className='flex h-screen w-1/3 justify-center pt-16 text-xl text-purple-500'>
        <div className=''>Loading...
            </div></div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div style={styles.container}>

            <h2 style={styles.title}>Communers</h2> {/* Título colocado acima dos cartões */}
            <div style={styles.cardsContainer}>
                {users.map((user) => (
                    <UserCard key={user.login.uuid} user={user} /> // Renderiza um UserCard para cada usuário
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        border: '1px solid #ccc',       
        borderRadius: '8px',
        width: '30%',
        height: '80%    ',
        overflowY: 'auto',
        margin: '20px', // Adiciona uma margem ao redor da sidebar
        position: 'fixed', // Mantém a sidebar fixa na tela
        top: '65px', // Alinha ao topo da tela
        left: '0', // Alinha ao canto esquerdo da tela
        
       
    },
    title: {
        textAlign: 'center', // Centraliza o título
        marginBottom: '20px', // Espaço entre o título e os cartões
        fontSize: '25px',
        color: 'rgba(194, 24, 192, 1)'
    },
    cardsContainer: {
        display: 'flex',
        flexDirection: 'column', // Coloca os cartões um embaixo do outro
       
    },
};

export default Sidebar;
