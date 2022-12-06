import React from "react";
import { Routes, Route } from "react-router-dom"
import RegisterForm from "./RegisterForm";

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/Register" element={<RegisterForm />}></Route>
            </Routes>
        </div>
    )
}

