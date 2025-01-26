import React from 'react';

function Posts({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.content}</h3>
          <p>By {post.author.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;

