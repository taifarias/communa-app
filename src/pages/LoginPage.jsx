import React, {  useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';


import AlertBox from "../components/AlertBox.jsx";
import RegisterForm from "../components/RegisterForm.jsx";
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
        <div className="bg-slate-200 flex justify-center lg:items-center max-h-screen max-w-screen ">
            <div id="container" className="box-border lg:flex ">
            <RegisterForm 
                    setAlertMessage={setAlertMessage}
                    setIsAlertVisible={setIsAlertVisible}
                />
            <LoginForm 
                    setAlertMessage={setAlertMessage}
                    setIsAlertVisible={setIsAlertVisible}
                />

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
