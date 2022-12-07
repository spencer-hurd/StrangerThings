import AllPosts from "./components/AllPosts";
import { fetchPosts, fetchMe } from "./api/auth";
import { useEffect, useState } from "react";
const Home = () => {
    // const [token, setToken] = useState(localStorage.getItem("token"))
    const [posts, setPosts] = useState([]);
    // const [user, setUser] = useState({});

    // console.log(token)
    // useEffect(() => {
    //   const getMe = async () => {
    //     const data = await fetchMe(token);
    //     setUser(data);
    //     console.log(user);
    //   };
    //   getMe();
    // }, [])
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
      <AllPosts posts={posts} />
    </div>
    );
  }
  export default Home;