import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState();

   useEffect(() => {
    const userToken = localStorage.getItem('user_token');
    const usersStorage = localStorage.getItem('users_db');

    if (userToken && usersStorage) {
        const hasUser = JSON.parse(usersStorage)?.filter(
            (user) => user.email === JSON.parse(userToken).email
        );
        if (hasUser) setUser(hasUser[0]);

    }
   }, []);

   const SignIn = (email, password) => { 
    const usersStorage = JSON.parse(localStorage.getItem('users_db'));
    
    const hasUser = usersStorage?.filter((user) =>user.email === email);

    if(hasUser?.filter) {
        if (hasUser[0].email === email && hasUser[0].password === password) {
            const token = Math.random().toString(36).substring(2);
            localStorage.setItem('user_token', JSON.stringify({ email, token}));
            setUser({ user, password });
            return;
        } else {
            return "E-mail ou senha incorretor";
        }
        
    } else {
        return "User not registred";
    }
   };

   const SignUp = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem('users_db'));

    if (hasUser?.lenght) {
        return "There's already an account with that e-mail";
    } 
    let newUser;
    if (usersStorage) {
        newUser = [...usersStorage, { email, password }];

    } else {
        newUser = [{ email, password }];
    }
    localStorage.setItem('users_db', JSON.stringify(newUser));
    return;
   };

   const SignOut = () => {
    setUser(null);
    localStorage.removeItem('users_token');
   };
    
   return (
    <AuthContext.Provider
    value={{ user, signed: !!user, SignIn, SignUp, SignOut }}
    >
        {children}
    </AuthContext.Provider>
   );

};
