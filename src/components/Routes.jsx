import React from "react";
import { Routes, Route } from "react-router-dom"
import RegisterForm from "./RegisterForm";
import Home from "../Home";
import { Login } from "./Login";

const AllRoutes = ({setToken}) => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login setToken={setToken}/>}></Route>
                <Route path="/register" element={<RegisterForm setToken={setToken}/>}></Route>
            </Routes>
        </div>
    )
}
export default AllRoutes;