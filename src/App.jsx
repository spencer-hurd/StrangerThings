import "./App.css";
import FetchPosts from "./api/auth";
import SinglePost from "./components/Post";
import AllPosts from "./components/AllPosts";
import { fetchPosts, fetchMe } from "./api/auth";
import { useEffect, useState } from "react";
import RegisterForm from "./components/RegisterForm";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [posts, setPosts] = useState([]);
  console.log(token)
  useEffect(()=>{

  }, [])
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
  return (<div className="App">
    <AllPosts posts = {posts}/>
  </div>
  );
}

export default App;
