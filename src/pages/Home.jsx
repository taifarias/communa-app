import React from 'react';
import Sidebar from '../components/Sidebar';
import PostList from '../components/PostList';
import MessageBox from '../components/MessageBox';
import Navebar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <Navebar />    
        <Sidebar />
        <PostList />
    </div>
  );
};

export default Home;
