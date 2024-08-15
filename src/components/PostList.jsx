import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const getRandomUser = () => {
        return users[Math.floor(Math.random() * users.length)];
    };

    return (
        <div style={styles.container}>
            {posts.map((post) => (
                <PostCard key={post.id} post={post} user={getRandomUser()} />
            ))}
        </div>
    );
};

const styles = {
    container: {
        width: '60%',               
        margin: '20px auto',
        marginRight:'80px',
        padding: '10px',
    },
};

export default PostList;
