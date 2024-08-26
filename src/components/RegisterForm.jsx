import React, { useState } from "react";
import LogoImg from '../assets/logo.png'
import useAuth from "../hooks/useAuth";

const RegisterForm = ({ setAlertMessage, setIsAlertVisible }) => {  // Recebendo as props

    const [cadastroUser, setCadastroUser] = useState('');
    const [cadastroEmail, setCadastroEmail] = useState('');
    const [cadastroSenha, setCadastroSenha] = useState('');

    const { login } = useAuth();

    const handleCadastro = (e) => {
        e.preventDefault();

        if (cadastroUser && cadastroSenha) {
            const existingUser = localStorage.getItem(cadastroUser);
            if (existingUser) {
                setAlertMessage('Name already used :(');  // Usando a prop
                setIsAlertVisible(true);  // Usando a prop
            } else {
                localStorage.setItem(cadastroUser, JSON.stringify({ email: cadastroEmail, password: cadastroSenha }));
                setAlertMessage('Successfully registered :)');  // Usando a prop
                setIsAlertVisible(true);  // Usando a prop
                setCadastroUser('');
                setCadastroEmail('');
                setCadastroSenha('');
                login(cadastroUser, cadastroSenha);
            }
        } else {
            setAlertMessage('Please fill in all fields!');  // Usando a prop
            setIsAlertVisible(true);  // Usando a prop
        }
    }

    const handleSignInClick = () => {       
        // Função para manipular o click no botão de sign-in
        if (sidebarRef.current) {
            sidebarRef.current.style.transform = 'translateX(-110%)'; // Move o sidebar para a esquerda
            sidebarRef.current.style.transition = 'transform 0.5s ease'; 
        }    
    };

    return (
        <div id="cadastroForm" className="bg-white rounded-t-xl flex items-center flex-col p-16 border-2 mt-10 h-container ">
            <div id="cabecalho" className="flex flex-col items-center mb-10 text-center ">
                <img src={LogoImg} alt="logo-communa" className="w-28 -mt-8" />
                <h1 className="font-semibold text-2xl">
                    Start now at <span className="text-center text-purple-400 font-bold">Communa</span>
                </h1>
            </div>

            <form onSubmit={handleCadastro}>
                <p className="flex justify-start items-start pb-3 text-purple-800">Create your account now</p>
                <div id="inputs" className="flex flex-col">
                    <input
                        type="text"
                        name="username"
                        className="border border-gray-400 w-72 p-1 px-4 rounded-md mb-3"
                        placeholder="Username"
                        value={cadastroUser}
                        onChange={(e) => setCadastroUser(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        className="border border-gray-400 w-72 p-1 px-4 rounded-md mb-3"
                        placeholder="E-mail"
                        value={cadastroEmail}
                        onChange={(e) => setCadastroEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        className="border border-gray-400 w-72 p-1 px-4 rounded-md mb-3"
                        placeholder="Password"
                        value={cadastroSenha}
                        onChange={(e) => setCadastroSenha(e.target.value)}
                        required
                    />
                </div>

                <div className="flex justify-end mt-5">
                    <button type="submit" className="bg-purple-400 border text-white py-2 px-4 rounded-lg">
                        Create account
                    </button>
                </div>
            </form>
            <div className="flex flex-col items-center text-purple-400 pt-6">
                <p>Already has an account?</p>
                <button onClick={handleSignInClick} className="font-bold border">Sign in here</button>
            </div>
        </div>
    );
};

export default RegisterForm;
