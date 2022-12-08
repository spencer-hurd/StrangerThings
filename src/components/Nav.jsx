import React from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../api/auth";

const Nav = ({token, setToken}) => {
    // const logIn = () => {
    //     setToken(props.token)
    // }
    const logOut = () => {
        setToken(null)
        localStorage.removeItem("token")
    }
    return (
        <header>
            <Link to="/" className="link-button">
        Stranger's Things
      </Link>
            <Link to="/login" className="link-button">Log In!</Link>
            <Link to="/register" className="link-button">New User? Register Here</Link>
            <button onClick={logOut}>Log Out</button>
        </header>
    )
}

export default Nav;