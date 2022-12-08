import React from "react";
import { loginUser } from "../api/auth";
import { useState } from "react";

export const Login = ({setToken}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    return (
    <form onSubmit={async (e)=> {
        try {
            e.preventDefault();
            const token = await loginUser(username, password)
            setToken(token);
            localStorage.setItem("token", token);
            console.log(username,password,token);
            } catch (error) {
            console.error(error)
            }
        }}>
            <label>Log In: <input 
                value={username} 
                type="text" 
                placeholder="Enter Username" 
                required 
                onChange={(e)=>setUsername(e.target.value)}/>
            </label>
            <label>Create Password: <input 
                value={password} 
                type="password" 
                placeholder="Enter Password" 
                required
                onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            <button type="submit">Log In</button>
            </form>
)}