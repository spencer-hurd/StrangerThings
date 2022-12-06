import React from "react";

const SinglePost = (props) => {
  return (
    <div className="single-post">
      <h2>{props.post.title}</h2>
      <p>{props.post.description}</p>
      <b>Price: {props.post.price}</b>
      <h3>Seller: {props.post.author.username}</h3>
      <b>Location: {props.post.location}</b>
      <button>Button</button>
    </div>
  );
};
export default SinglePost;
