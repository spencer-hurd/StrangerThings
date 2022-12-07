import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <header>
            <form>
            <label> Log-in: 
                <input type="text" 
                placeholder="Enter Username"/>
            </label>
            <label> Password: 
                <input type="password" 
                placeholder="Enter Password"/>
            </label>
            <button type="submit">
                Submit
            </button>
            </form>
            <Link to="/">New User? Register here</Link>
        </header>
    )
}

export default Nav;