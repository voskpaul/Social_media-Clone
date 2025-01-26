import React, { useEffect, useState } from 'react';
import API from '../utils/api';
import Posts from '../components/Posts/Posts';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await API.get('/posts');
        setPosts(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <Posts posts={posts} />
    </div>
  );
}

export default Home;
