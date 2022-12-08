import React, {useEffect, useState} from "react";
import { fetchPosts } from "../api/auth";
import SinglePost from "./Post";


const MyPosts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const getPosts = async () => {
          const response = await fetchPosts();
          const { data: { posts }, } = await response;
          setPosts(posts);
          console.log(response)
          console.log("posts", posts)
        }
        getPosts();
      }, []);
    let hasPosted = false;
    posts.forEach((post) => {
        if (post.isAuthor){
            hasPosted = true;
        }
    })
    return (
      <>
      {hasPosted ? ( 
        posts.map((post) => {
          if (post.isAuthor) {
            return <SinglePost post={post} posts={posts} setPosts={setPosts} isAuthor={post.isAuthor} key={post._id} />;
          }
        })
      ) : (
             <p>You haven't posted anything.</p>
         )}
    
      </>
    );
  };
  export default MyPosts; 