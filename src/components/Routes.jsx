import React from "react";
import { Routes, Route } from "react-router-dom"
import RegisterForm from "./RegisterForm";
import Home from "../Home";

const AllRoutes = ({setToken}) => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/register" element={<RegisterForm setToken={setToken}/>}></Route>
            </Routes>
        </div>
    )
}
export default AllRoutes;