
import React from 'react';

const PostCard = ({ post, user }) => {
    return (
       
        <div className="flex justify-between items-start border border-gray-300 p-4 mb-4 bg-gray-100 rounded-xl px-6">
            <div className="post-content flex xl:px-10">
                <p className="mt-2 text-gray-700">{post.body}</p>
            </div>

            <div className="user-info">
                {user && (
                    <>
                        <img src={user.picture} alt={user.name} className="user-picture rounded-full" />
                        <span className="user-name">{user.name}</span>
                    </>
                )}
            </div>
        </div>
    );
};

export default PostCard;



