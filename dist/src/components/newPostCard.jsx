import React from "react";

const newPostCard = ({ post, user }) => {
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

export default newPostCard;