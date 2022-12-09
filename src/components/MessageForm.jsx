import React, { useState } from "react";
import { useLocation } from "react-router-dom";
const cohort = "2211-FTB-ET-WEB-FT";

const MessageForm = () => {
    const { state } = useLocation();
    const id = state?.id;
    console.log(id)
    const [content, setContent] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token")
           const response = await fetch(`https://strangers-things.herokuapp.com/api/${cohort}/posts/${id}/messages`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    message: {
      content,
    }
  })
})
        const newMessage = await response.json();
        console.log(newMessage)
        setContent("")
        alert("Message sent!")
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <form onSubmit={handleSubmit} className="message-form">
        <input type="text" value={content} onChange={e => setContent(e.target.value)} placeholder="Message content"></input>
        <button type="submit">Send Message</button>
        </form>
    )
}
export default MessageForm;