import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import LogoImg from '../assets/logo.png';

const LoginForm = () => {
    const [loginUser, setLoginUser] = useState('');
    const [loginSenha, setLoginSenha] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [isAlertVisible, setIsAlertVisible] = useState(false);

    const { login } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();

        const storedUser = JSON.parse(localStorage.getItem(loginUser));

        if (storedUser && storedUser.password === loginSenha) {
            login(loginUser, loginSenha);
        } else {
            setAlertMessage('Incorrect username or password.');
            setIsAlertVisible(true);
        }
    };

    const handleRegisterHereClick = () => {
        if (sidebarRef.current) {
            sidebarRef.current.style.transform = 'translateX(0%)';
            sidebarRef.current.style.transition = 'transform 0.5s ease';
        }
    };

    return (
        <div id="cadastroForm" className="bg-white rounded-t-xl flex items-center flex-col p-16 border-2 mt-10">
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
                        required
                    />
                </div>

                <div className="flex justify-end">
                    <button type="submit" className="bg-purple-400 border text-white py-2 px-4 rounded-lg">
                        Sign in
                    </button>
                </div>
            </form>

            {isAlertVisible && (
                <div className="text-red-500 mt-4">
                    {alertMessage}
                </div>
            )}

            <div className="flex flex-col items-center text-purple-400 pt-10 pb-10">
                <p>Doesn't have an account?</p>
                <button onClick={handleRegisterHereClick} className="font-bold">Register here</button>
            </div>
        </div>
    );
};

export default LoginForm;
