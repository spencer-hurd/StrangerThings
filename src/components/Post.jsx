import React from "react";
import { deletePost } from "../api/auth";
import { Link } from "react-router-dom";
import { checkUserLoggedIn } from "./Login";

const SinglePost = ({post, setPosts, posts}) => {
  const handleDelete = (id) => {deletePost(id, {setPosts, posts})}
  return (
    <div className="single-post">
      <h2 className="title">{post.title}</h2>
      <p>{post.description}</p>
      <b>Price: {post.price}</b>
      <h3>Seller: {post.author.username}</h3>
      <b>Location: {post.location ? post.location : "[On Request]"}</b>
      {post.isAuthor ? (
        <button onClick={() => handleDelete(post._id)}>Delete</button>
      ) : checkUserLoggedIn() ? (
      <Link to="/message-form" state={{ id: post._id }}>
      <button type="button">Send Message</button>
      </Link>) :
      <div></div>
      }
    </div>
  );
};
export default SinglePost;
