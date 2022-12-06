import React, { useState } from "react";
import { registerUser } from "../api/auth";

const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div id="register-form">
            <form onSubmit={async (e)=> {
               try {
                e.preventDefault();
                const token = await registerUser(username, password)
                localStorage.setItem("token", token);
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
                {/* <label>Confirm Password: <input minLength={8} type="password" placeholder="Confirm Password" required/></label> */}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default RegisterForm;