import React from 'react';
import Sidebar from '../components/Sidebar';
import PostList from '../components/PostList';

const Home = () => {
  return (
    <div>
      <Sidebar />
      <PostList />
    </div>
  );
};

export default Home;
