import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { registerUser } from "../api/auth";

const RegisterForm = ({ setToken }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const location = useLocation();
    const comparePasswords = (username, password, confirmPassword) => {
        if (password !== confirmPassword) {
          alert('Passwords do not match!');
          return false;
        } else {
          return true;
        }
      } 
    return (
        <div id="register-form">
            <form onSubmit={async (e)=> {
               try {
                e.preventDefault();
                if (comparePasswords(username, password, confirmPassword)) {
                const token = await registerUser(username, password)
                setToken(token);
                localStorage.setItem("token", token);
                location.pathname = '/';
                }
               } catch (error) {
                console.error(error)
               }
            }}>
                <label>Create Username: <input 
                value={username} 
                minLength={4} 
                maxLength={12} 
                type="text" 
                placeholder="Enter Username" 
                required 
                onChange={(e)=>setUsername(e.target.value)}/></label>
                <label>Create Password: <input 
                value={password} 
                minLength={8} 
                type="password" 
                placeholder="Enter Password" 
                required
                onChange={(e)=>setPassword(e.target.value)}/></label>
                <label>Confirm Password: <input 
                value={confirmPassword} 
                minLength={8} 
                type="password" 
                placeholder="Confirm Password" 
                required
                onChange={(e)=>setConfirmPassword(e.target.value)}/></label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default RegisterForm;