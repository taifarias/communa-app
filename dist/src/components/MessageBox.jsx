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
        <div className=' ml-20 mt-10 lg:ml-44 xl:ml-1'>   
            <input
                id='messageInput'
                type="text" 
                className='w-4/5 h-28 mr-10 p-10 rounded-lg bg-purple-200 mb-3 md:ml-16 lg:ml-72 lg:w-3/6 xl:w-inputxl xl:ml-32 2xl:ml-72'
                placeholder={user ? 'Escreva sua mensagem aqui' : 'Faça o login para enviar mensagem'}
                value={message}
                disabled={!user} 
                onChange={(e) => setMessage(e.target.value)}
            />
            <div className='flex justify-end flex-row w-4/5'>
                <div id='userName' className='pr-5 pt-3'>
                    {user ? user.username : 'Login do User AQUI'}
                </div>
                <button className='border-2 rounded-lg border-purple-400 p-1 pr-2 mb-10' onClick={handleAddPost}>
                    <img src={LogoImg} alt="Send post" className='w-7' />
                </button>
            </div>
        </div>
    );
};



export default MessageBox;
