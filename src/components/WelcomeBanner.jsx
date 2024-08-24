import React from "react";
import { useRef } from "react";

const WelcomeBanner = () => {
    
    const sidebarRef = useRef(null);



    return (
        <div 
        id="sidebar" 
        ref={sidebarRef}  
        className="bg-gradient-to-br from-violet-400 to-pink-200p-5 lg:h-container lg:w-container lg:rounded-r-md absolute lg:right-72"
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
    )
}

export default WelcomeBanner;