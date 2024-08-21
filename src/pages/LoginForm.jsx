import React, {  useState, useRef } from "react";
import { useAuth } from "../hooks/useAuth.jsx";
import { useNavigate } from 'react-router-dom';


import LogoImg from '../assets/logo.png'
import AlertBox from "../components/AlertBox";

function LoginForm() {
    const [cadastroUser, setCadastroUser] = useState('');
    const [cadastroEmail, setCadastroEmail] = useState('');
    const [cadastroSenha, setCadastroSenha] = useState('');
    const [loginUser, setLoginUser] = useState('');
    const [loginSenha, setLoginSenha] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [isAlertVisible, setIsAlertVisible] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate(); // Hook para navegação
       
    const sidebarRef = useRef(null);

    const handleCadastro = (e) => {
        e.preventDefault();
    
        if (cadastroUser && cadastroSenha ) {
            const existingUser = localStorage.getItem(cadastroUser);
            if (existingUser) {
                setAlertMessage('Name already used :(');
                setIsAlertVisible(true);
            } else {
                localStorage.setItem(cadastroUser, JSON.stringify({ email: cadastroEmail, password: cadastroSenha }));
                setAlertMessage('Successfully registered :)');
                setIsAlertVisible(true);              
                setCadastroUser('');
                setCadastroEmail('');
                setCadastroSenha('');
                login(loginUser, loginSenha);
            }
        } else {
            setAlertMessage('Please fill in all fields!');
            setIsAlertVisible(true);
        }
    }

    
    const handleLogin = (e) => {
        e.preventDefault();
    
        if (loginUser && loginSenha) {
            login(loginUser, loginSenha);
           
        } else {
            setAlertMessage('Please fill in all fields!');
            setIsAlertVisible(true);
        }
    }

    const handleClickAlert = () => {
       
            setIsAlertVisible(false);
        
    };
    
   const handleSignInClick = () => {
        if (sidebarRef.current) {
            sidebarRef.current.style.transform = 'translateX(-110%)'; // Move o sidebar para a esquerda
            sidebarRef.current.style.transition = 'transform 0.5s ease'; // transição suave
        }    
   
    };

    const handleRegisterHereClick = () => {
        if (sidebarRef.current) {
            sidebarRef.current.style.transform = 'translateX(0%)';
            sidebarRef.current.style.transition = 'transform 0.5s ease';

        }
    }

  

    return (
        <div className="bg-slate-200 flex justify-center items-center h-screen">
            <div id="container" className="flex w-3/5 h-4/5 rounded-md ">
                <div id="cadastroForm" className="bg-white h-full w-1/2 rounded-l-md flex items-center flex-col pt-10">
                    <div id="cabecalho" className="pb-6 flex flex-col items-center">
                        <img src={LogoImg} alt="logo-communa" className="w-28" />
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
                                id="pass"
                                required
                            />
                            
                        </div>

                        <div className="flex justify-end">
                            <button type="submit" className="bg-purple-400 border text-white py-2 px-4 rounded-lg">
                                Create account
                            </button>
                        </div>
                    </form>
                    <div className="flex flex-col items-center text-purple-400 pt-6"><p>
                        Already has an account?</p>
                        <button onClick={handleSignInClick} className="font-bold border">Sign in here</button>

                        </div>
                </div>
                <div id="cadastroForm" className="bg-white h-full w-1/2 rounded-l-md flex items-center flex-col pt-10">
                    <div id="cabecalho" className="pb-6 flex flex-col items-center">
                        <img src={LogoImg} alt="logo-communa" className="w-28" />
                        <h1 className="font-semibold text-2xl">
                            Welcome back to <span className="text-center text-purple-400 font-bold">Communa</span>
                        </h1>
                    </div>

                    <form onSubmit={handleLogin}>
                        <p className="flex justify-start items-start pt-3 text-purple-800">Sign in here</p>
                        <div id="inputs" className="flex flex-col pt-8 pb-5">
                            <input
                                type="text"
                                name="username"
                                className="border border-gray-400 w-72 p-1 px-4 rounded-md mb-3"
                                placeholder="Username"
                                value={loginUser}
                                onChange={(e) => setLoginUser(e.target.value)}
                                required
                            />
                           
                            <input
                                type="password"
                                name="password"
                                className="border border-gray-400 w-72 p-1 px-4 rounded-md mb-3"
                                placeholder="Password"
                                value={loginSenha}
                                onChange={(e) => setLoginSenha(e.target.value)}
                                id="pass"
                                required
                            />
                           
                        </div>

                        <div className="flex justify-end">
                            <button type="submit" className="bg-purple-400 border text-white py-2 px-4 rounded-lg">
                                Sign in
                            </button>
                        </div>
                    </form>
                    <div className="flex flex-col items-center text-purple-400 pt-14"><p>
                        Doesn't have an account?</p>
                        <button onClick={handleRegisterHereClick} className="font-bold">Register here</button>

                        </div>
                </div>





                <div 
                id="sidebar" 
                ref={sidebarRef}  
                className="bg-gradient-to-br from-violet-400 to-pink-200 h-container w-container rounded-r-md absolute right-72"
                style={{ transform: 'translateX(0%)', transition: 'transform 0.5s ease' }} 
                >
                    <div className="flex justify-center items-center flex-col h-full ">
                         <h1 className="font-bold text-white text-xl pb-2 xl:text-lg lg:text-center">
                        More than a network. A Community.
                    </h1>
                    <p className="py-6 px-28 text-center text-white xl:px-8 lg:px-4">
                        Connect. Share your stories, explore the unknown and discover the power of community. <strong>Communa</strong>, the world at your fingertips.
                    </p>
                    </div>
                   
                </div>

            </div>

            
                <AlertBox 
                    message={alertMessage}
                    onClose={handleClickAlert}
                    isVisible={isAlertVisible}
                />
            
            
          
        </div>

       


    );
}

export default LoginForm;
