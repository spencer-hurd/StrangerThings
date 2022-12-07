import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
    const logIn = () => {
        setToken(user.token)
    }
    const isLoggedIn = () => {
        if (token) {
            return true;
        }else{
            return false;
        }
    }
    return (
        <header>
            <Link to="/" className="link-button">
        Stranger's Things
      </Link>
            <form>
                <label>Log In: <input
                    type="text"
                    placeholder="Enter Username" />
                </label>
                <label>Password: <input
                    type="password"
                    placeholder="Enter Password" />
                </label>
                <button
                    type="submit">submit</button>
            </form>
            <Link to="/register">New User? Register Here</Link>
        </header>
    )
}

export default Nav;