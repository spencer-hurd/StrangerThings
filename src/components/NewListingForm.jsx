import React, { useState } from 'react';
const cohort = "2211-FTB-ET-WEB-FT";
import { useNavigate } from 'react-router-dom';




const NewListingForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [willDeliver, setWillDeliver] = useState(false);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token")
      const response = await fetch(
        `https://strangers-things.herokuapp.com/api/${cohort}/posts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            post: {
              title: title,
              description: description,
              price: price,
              location: location,
              willDeliver: willDeliver,
            },
          }),
        }
      );
      const newPost = await response.json();
      console.log(newPost)
      const result = setPosts([...posts, newPost]);
      console.log(result);
      navigate('/')
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title: <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        required
      /></label>
      <label>Description: <input
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
        required
      /></label>
      <label>Price: <input
        type="text"
        value={price}
        onChange={e => setPrice(e.target.value)}
        placeholder="Price"
        required
      /></label>
      <label>Location: <input
        type="text"
        value={location}
        onChange={e => setLocation(e.target.value)}
        placeholder="Location"
      /></label>
      <label>Will Deliver?
      <input
        type="checkbox"
        checked={willDeliver}
        onChange={e => setWillDeliver(e.target.checked)}
      /></label>
      <button type="submit">Create Post</button>
    </form>
  )
};

export default NewListingForm;