import React, { useState } from 'react';
import LogoImg from '../assets/logo.png';

const MessageBox = ({ onAddPost }) => {
    const [message, setMessage] = useState('');

    const handleAddPost = () => {
        const userName = document.getElementById('userName').textContent;

        if (message && userName) {
            const newPost = {
                id: Date.now(), // Gerar um ID único
                body: message,
            };
            const user = {
                name: userName,
                picture: 'https://via.placeholder.com/40', // Imagem placeholder, você pode alterar
            };
            onAddPost(newPost, user);
            setMessage(''); // Limpa o input após adicionar o post
        }
        console.log(newPost.body)
        console.log(user.name)
    };
    return (
        <div style={styles.container}>
            <input
                id='messageInput'
                type="text"
                style={styles.input}
                placeholder='Faça o login para enviar mensagem'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <div className='flex justify-end flex-row w-4/5'>
                <div id='userName' className='pr-5 pt-3'>
                    Login do User AQUI
                </div>
                <button style={styles.button} onClick={handleAddPost}>

                    <img src={LogoImg} alt="logo-communa" style={styles.logo} />
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
