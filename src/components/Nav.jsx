import React from "react";
import { Link, useLocation} from "react-router-dom";
import { loginUser } from "../api/auth";
import { checkUserLoggedIn } from "./Login";

const Nav = ({setToken}) => {
    const location = useLocation();
    return (
        <header>
            <Link to="/" className="logo">
        Stranger's Things
      </Link>
      {checkUserLoggedIn() ?
        <div>
          <Link to="/new-listing"><button type="button" className="header-button">Create a New Listing</button></Link>
          <Link to="/messages"><button type="button" className="header-button">Messages</button></Link>
          <Link to="/my-posts"><button type="button" className="header-button">My Posts</button></Link>
          <button type="button" className="header-button" onClick={() => {
            localStorage.removeItem('token');
            setToken(null);
            location.pathname = "/";
          }}>Logout</button>
        </div>
        :
        <div>
        <Link to="/login" className="link-button">Log In!</Link>
        <Link to="/register" className="link-button">New User? Register Here</Link>
        </div>
        }   
        </header>
    )
}

export default Nav;