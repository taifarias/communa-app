import React from "react";

import LogoImg from '../assets/logo.png';

const Login = () => {
    return (
        <div className="bg-slate-200 flex justify-center items-center h-screen" >
            
            <section id="container" className="flex w-3/5 h-4/5 rounded-md ">        
                <div id="cadastro" className="bg-white h-full w-1/2 rounded-l-md flex items-center flex-col pt-10">
                <div className="pb-6 flex flex-col items-center">
                    <img src={LogoImg} alt="logo-communa" className="w-28" />
                    <h1 className="font-semibold text-2xl">
                        Start now at <span className="text-center text-purple-400 font-bold">Communa</span>
                    </h1>
                </div>
                
                <div className="">
                    <p className="flex justify-start items-start pb-3 text-purple-800">
                        Create you account now</p>

                    <div id="inputs" className="flex flex-col ">

                            <input type="text" className="border border-gray-400 w-72 p-1 px-4 rounded-md mb-3 lg:w-" placeholder="Username" />
                            <input type="text" className="border border-gray-400 w-72 p-1 px-4 rounded-md mb-3" placeholder="E-mail" />
                            <input type="text" className="border border-gray-400 w-72 p-1 px-4 rounded-md mb-3" placeholder="Password" />
                            <input type="text" className="border border-gray-400 w-72 p-1 px-4 rounded-md mb-3" placeholder="Confirm password" />
                            
                    </div>
                    
                    <div className="flex justify-end">
                            <button className="bg-purple-400 border text-white py-2 px-4 rounded-lg">
                            Sing in
                            </button>
                    </div>
                   
            
                </div>
            
                

            </div>
        



            <div id="sidebar" className="bg-gradient-to-br from-violet-400 to-pink-200 h-full w-1/2 rounded-r-md flex justify-center items-center flex-col" >

            <h1 className="font-bold text-white text-xl pb-2 xl:text-lg lg:text-center">
                Mora than a network. A Community.
            </h1> 
            

                <p className="py-6 px-28 text-center text-white xl:px-8 lg:px-4">
                    Conect. Share your stories, explore the unknow and discover the power of community. <strong>Communa</strong>, the world at your fingertips.</p>


            </div>
        </section>

            
            
            
    </div>
    )
}

export default Login