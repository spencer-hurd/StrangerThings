import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <header>
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
            <Link to="/Register">New User? Register Here</Link>
        </header>
    )
}

export default Nav;