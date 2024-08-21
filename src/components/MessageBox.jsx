// MessageBox.js
import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth'; // Importa o hook de autenticação
import LogoImg from '../assets/logo.png';

const MessageBox = ({ onAddPost }) => {
    const [message, setMessage] = useState('');
    const { user } = useAuth(); 

    const handleAddPost = () => {
        if (message && user) {
            const newPost = {
                id: Date.now(), // Gerar um ID único
                body: message,
                user: { 
                    name: user.username, // Usar o nome de usuário logado
                    picture: LogoImg, // Usar a foto padrão
                }
            };
            onAddPost(newPost);
            setMessage('');
        }
    };
    

    return (
        <div style={styles.container}>
            <input
                id='messageInput'
                type="text"
                style={styles.input}
                placeholder={user ? 'Escreva sua mensagem aqui' : 'Faça o login para enviar mensagem'}
                value={message}
                disabled={!user} // Desabilita o input se não houver um usuário autenticado
                onChange={(e) => setMessage(e.target.value)}
            />
            <div className='flex justify-end flex-row w-4/5'>
                <div id='userName' className='pr-5 pt-3'>
                    {user ? user.username : 'Login do User AQUI'}
                </div>
                <button style={styles.button} onClick={handleAddPost}>
                    <img src={LogoImg} alt="Send post" style={styles.logo}  />
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        marginLeft: '500px',
        marginTop: '20px'
    },
    input: {
        width: '80%',
        height: '80px',
        marginRight: '10px',
        padding: '10px',
        borderRadius: '10px',
        borderColor: 'rgba(191, 83, 200, 1)',
        backgroundColor: 'rgba(191, 83, 200, .2)',
    },
    button: {
        borderRadius: '10px',
        border: '2px solid',
        borderColor: 'rgba(191, 83, 200, 1)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '4px',
        paddingRight: '7px',
    },
    logo: {
        width: '30px'
    }
};

export default MessageBox;
