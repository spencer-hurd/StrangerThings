import React from "react";


const Messages = ({user}) => {
    console.log("USER HERE NOW:", {user})
    const messages = user.data.messages;
    console.log(messages);
  return (
    <>
      {messages !== [] ? (
      messages.map((message) => (
            <div key={message._id}>
                <p>{message.content}</p>
            </div>
      )
        )) : (
            <h5>none</h5>
        )}
    </>
  );
};
export default Messages;
