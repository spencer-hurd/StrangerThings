import React, {useState} from "react";
import SinglePost from "./Post";

const AllPosts = (props) => {
  const { posts, setPosts } = props;
  const [searchTerm, setSearchTerm] = useState('');
  

  const postMatches = (post, text) => {
    // return true if any of the fields you want to check against include the text
    // strings have an .includes() method 
    return Object.values(post).some(value => typeof value === 'string' && value.includes(text));
  }

  const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;
  return (
    <>
      <input className="searchBar" type="text" placeholder="Search" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}></input>
      {postsToDisplay.map((post) => {
        return <SinglePost post={post} posts={posts} setPosts={setPosts} isAuthor={post.isAuthor} key={post._id}/>;
      })}
    </>
  );
};
export default AllPosts;
