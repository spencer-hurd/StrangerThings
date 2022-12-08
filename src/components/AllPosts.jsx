import React from "react";
import SinglePost from "./Post";

const AllPosts = (props) => {
  const { posts, setPosts } = props;
  return (
    <>
      {posts.map((post) => {
        return <SinglePost post={post} posts={posts} setPosts={setPosts} isAuthor={post.isAuthor} key={post._id} />;
      })}
    </>
  );
};
export default AllPosts;
