import React from "react";
import { Link} from "react-router-dom";
import { checkUserLoggedIn } from "./Login";

const Nav = ({setToken, user}) => {
  const username = user?.data?.username
  console.log(username);
      return (
        <header className="header">
            <Link to="/" className="logo">
            <div className="strangers">
              <div id="stranger">STRANGER'
              <span id="last">S</span></div>
            </div>
            <div id="things">THINGS</div>
        </Link>
        <br/>
      {checkUserLoggedIn() ?
        <div>
            <b className="welcome">Welcome, {username}!</b>
            <br/><hr/>
          <Link to="/new-listing"><button type="button" className="header-button">Create a New Listing</button></Link>
          <Link to="/messages"><button type="button" className="header-button">Messages</button></Link>
          <Link to="/my-posts"><button type="button" className="header-button">My Posts</button></Link>
          <button type="button" className="header-button logout" onClick={() => {
            localStorage.removeItem('token');
            setToken(null);
            location.pathname = "/";
          }}>Logout</button>
        </div>
        :
        <div>
        <Link to="/login" className="link-button">Log In!</Link>
        <br/>
        <Link to="/register" className="link-button">New User? Register Here</Link>
        </div>
        }   
        </header>
    )
}

export default Nav;