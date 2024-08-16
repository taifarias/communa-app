import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';
import axios from 'axios';
import MessageBox from './MessageBox';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    useEffect(() => {
        const fetchPostsAndUsers = async () => {
            try {
                const postResponse = await axios.get('https://dummyjson.com/posts?limit=10');
                const userResponse = await axios.get('https://randomuser.me/api/?results=5');

                let postData = postResponse.data.posts;
                const userData = userResponse.data.results.map(user => ({
                    id: user.login.uuid,
                    name: `${user.name.first} ${user.name.last}`,
                    picture: user.picture.large,
                }));

                postData = shuffleArray(postData); // Embaralha os posts

                setPosts(postData);
                setUsers(userData);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPostsAndUsers();
    }, []);

    const handleAddPost = (newPost, user) => {
        setPosts([newPost, ...posts]); // Adiciona o novo post no topo da lista
    };

    if (loading) return <div className='flex h-screen w-screen justify-center pl-80 pt-20 text-xl text-purple-500'>
        <div>Loading...</div>
    </div>;

    if (error) return <div className='flex h-screen w-screen justify-center pl-80 pt-20 text-xl text-purple-500'>
        <div>Error: {error}</div>
    </div>;

    return (
        <div>
            <MessageBox onAddPost={handleAddPost} />
            <div style={styles.container}>
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} user={users.find(u => u.name === post.userName)} />
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        width: '60%',
        margin: '20px auto',
        marginRight: '80px',
        padding: '10px',
    },
};

export default PostList;
