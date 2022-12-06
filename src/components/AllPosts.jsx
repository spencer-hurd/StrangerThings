import React from "react";
import SinglePost from "./Post";

const AllPosts = (props) => {
  const { posts } = props;
  return (
    <>
      {posts.map((post) => {
        return <SinglePost post={post} key={post.title} />;
      })}
    </>
  );
};
export default AllPosts;
