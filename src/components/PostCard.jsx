import React from 'react';

const PostCard = ({ post, user }) => {
    return (
        <div style={styles.card}>
            <div style={styles.postContent}>
                <h3 style={styles.body}>{post.body}</h3>
            </div>
            {user && (
                <div style={styles.userInfo}>
                    <p style={styles.userName}>{user.name}</p>
                    <img src={user.picture} alt={user.name} style={styles.avatar} />
                </div>
            )}
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '20px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'left',
    },
    postContent: {
        flex: 1,
        marginRight: '20px',
    },
    title: {
        margin: '0 0 10px 0',
        fontSize: '18px',
    },
    body: {
        fontSize: '14px',
        color: '#555',
    },
    userInfo: {
        display: 'flex',
        alignItems: 'center',
    },
    userName: {
        marginRight: '10px',
        fontSize: '14px',
        color: '#333',
    },
    avatar: {
        borderRadius: '50%',
        width: '40px',
        height: '40px',
    },
};

export default PostCard;
