import React from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../api/auth";
import { checkUserLoggedIn } from "./Login";

const Nav = ({setToken}) => {
    
    return (
        <header>
            <Link to="/" className="link-button">
        Stranger's Things
      </Link>
      {checkUserLoggedIn() ?
        <div>
        <button type="button" onClick={() => {
            localStorage.removeItem('token');
            setToken(null);
          }}>Logout</button>
          <Link to="/new-listing" className="link-button">Create a New Listing</Link>
          <Link to="/messages"><button type="button">Messages</button></Link>
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