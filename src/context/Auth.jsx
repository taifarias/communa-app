// Auth.jsx
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Cria o Contexto de Autenticação
export const AuthContext = createContext();

// Provedor de Contexto de Autenticação
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const navigate = useNavigate(); 

  // Função para fazer login
  const login = (username, password) => {
    // Simula a validação de login
    const storedUser = localStorage.getItem(username);
    if (storedUser) {
      const { password: storedPassword } = JSON.parse(storedUser);
      if (storedPassword === password) {
        setUser({ username });
        navigate('/'); 
      } else {
        setAlertMessage('Username or password incorrect');
                    setIsAlertVisible(true);
      }
    } else {
        setAlertMessage('Username or password incorrect');
        setIsAlertVisible(true);
    }
  };


  // Função para fazer logout
  const logout = () => {
    setUser(null);
    navigate('/loginform'); // Redireciona para a página de login após o logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
