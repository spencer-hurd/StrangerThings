import AllPosts from "./components/AllPosts";
import { fetchPosts, fetchMe } from "./api/auth";
import { useEffect, useState } from "react";
import { checkUserLoggedIn } from "./components/Login";
const Home = () => {

    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({})
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
      <AllPosts setPosts={setPosts} posts={posts} />
    </div>
    );
  }
  export default Home;