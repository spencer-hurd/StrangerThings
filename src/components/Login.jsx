import React from "react";
import { useLocation } from "react-router-dom";
import { loginUser } from "../api/auth";
import { useState } from "react";

export const Login = ({setToken}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const location = useLocation();
    
    return (
    <form className="user" onSubmit={async (e)=> {
        try {
            e.preventDefault();
            const token = await loginUser(username, password)
            setToken(token);
            localStorage.setItem("token", token);
            location.pathname = '/';
            console.log(username,password,token);
            } catch (error) {
            console.error(error)
            }
        }}>
            <label>
            <input 
                value={username} 
                type="text" 
                placeholder="Username" 
                required 
                onChange={(e)=>setUsername(e.target.value)}/>
            </label>
            <label>
            <input 
                value={password} 
                type="password" 
                placeholder="Password" 
                required
                onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            <br />
            <button type="submit">Log In</button>
            </form>
)}

export const checkUserLoggedIn = () => {
    const token = localStorage.getItem('token');
    return token ? true : false;
  }