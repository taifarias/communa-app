import React, { useEffect, useState } from 'react';
import UserCard from "./UsersCard";
import axios from 'axios';

const Sidebar = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isOpen,setisOpen] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://randomuser.me/api/?results=25');
              
                setUsers(response.data.results);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const toggleDropdown = () => {
        setisOpen(!isOpen);
    };


    if (loading) return <div className='flex h-screen w-1/3 justify-center pt-16 text-xl text-purple-500'>
        <div className=''>Loading...
            </div></div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='rounded-lg border border-gray-300 flex flex-col lg:w-1/4 lg:h-4/5 lg:overflow-y-auto lg:ml-10 lg:fixed xl:mt-8'>

            <button 
            className='text-center text-2xl text-purple-500 my-3 cursor-pointer lg:mb-12 flex justify-center'
            onClick={toggleDropdown}
            >
                <h2>Communers
                    </h2> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 ml-2 mt-1 lg:hidden">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

            </button> 
            <div 
                className={`${
                    isOpen ? 'block' : 'hidden'
                } lg:block lg:relative lg:mt-0 lg:shadow-none lg:w-auto`}
            >
                <div className='lg:ml-6 sm:ml-44 md:ml-64'>
                {users.map((user) => (
                    <UserCard key={user.login.uuid} user={user} /> 
                ))}
            </div>
            </div>
            
        </div>
    );
};



export default Sidebar;
