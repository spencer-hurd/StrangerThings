import React from "react";


const Messages = (props) => {
    console.log("USER HERE NOW:", props.user)
    const messages = props.user?.data?.messages;
    console.log("messages:", messages);
  return (
    <>
      {messages && messages.length ? messages.map((message) => {
        return (
            <div key={message._id} className="single-message">
                <h2>{message.content}</h2>
                <b>Message from: {message.fromUser.username}</b>
                <p>Regarding this post: {message.post.title}</p>
            </div>
        )
        
      }) : <p>Your inbox is empty.</p>}
    
    </>
  );
};
export default Messages;
