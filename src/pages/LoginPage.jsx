import React, {  useState, useRef } from "react";
import { useAuth } from "../hooks/useAuth.jsx";
import { useNavigate } from 'react-router-dom';


import AlertBox from "../components/AlertBox.jsx";
import RegisterForm from "../components/RegisterForm.jsx";

import LogoImg from '../assets/logo.png'
import LoginForm from "../components/LoginForm.jsx";
import WelcomeBanner from "../components/WelcomeBanner.jsx";

function LoginPage() {
   
  
    const [alertMessage, setAlertMessage] = useState('');
    const [isAlertVisible, setIsAlertVisible] = useState(false);

   
    const navigate = useNavigate();
   
   
   
    const handleClickAlert = () => {
       
            setIsAlertVisible(false);
        
    };
       

   

  

    return (
        <div className="bg-slate-200 flex justify-center lg:items-center h-screen">
            <div id="container" className="box-border">
                <RegisterForm />

                {/* <LoginForm /> */}

                 <WelcomeBanner />    

            </div>

            
                <AlertBox 
                    message={alertMessage}
                    onClose={handleClickAlert}
                    isVisible={isAlertVisible}
                />
            
            
          
        </div>

       


    );
}

export default LoginPage;
