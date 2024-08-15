import React from 'react';
import Sidebar from '../components/Sidebar';
import PostList from '../components/PostList';
import MessageBox from '../components/MessageBox';

const Home = () => {
  return (
    <div>
        <Sidebar />
        <MessageBox />
        <PostList />
    </div>
  );
};

export default Home;
