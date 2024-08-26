import React from "react";
import { useRef } from "react";

const WelcomeBanner = () => {
    
    const sidebarRef = useRef(null);



    return (
        <div 
        id="sidebar" 
        ref={sidebarRef}  
        className="bg-gradient-to-br from-violet-400 to-pink-200 p-5 lg:h-container lg:mt-10 lg:w-banner"
        style={{ transform: 'translateX(0%)', transition: 'transform 0.5s ease' }} 
        >
            <div className="flex justify-center items-center flex-col h-full w-85">
                 <h1 className="font-bold text-white text-xl pb-2 xl:text-lg text-center px-16 mt-3">
                More than a network. A Community.
            </h1>
            <p className="py-6 px-10 text-center text-white xl:px-8 lg:px-4">
                Connect. Share your stories, explore the unknown and discover the power of community. <strong>Communa</strong>, the world at your fingertips.
            </p>
            </div>
           
        </div>
    )
}

export default WelcomeBanner;