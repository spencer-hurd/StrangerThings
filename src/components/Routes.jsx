import React from "react";
import { Routes, Route } from "react-router-dom"
import RegisterForm from "./RegisterForm";
import Home from "../Home";
import { Login } from "./Login";
import NewListingForm from "./NewListingForm";
import MessageForm from "./MessageForm";
import Messages from "./Messages";

const AllRoutes = ({token, setToken, user}) => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login setToken={setToken}/>}></Route>
                <Route path="/register" element={<RegisterForm setToken={setToken}/>}></Route>
                <Route path="/new-listing" element={<NewListingForm token={token}></NewListingForm>}></Route>
                <Route path="/message-form" element={<MessageForm />}></Route>
                <Route path="/messages" element={<Messages user={user}/>}></Route>
            </Routes>
        </div>
    )
}
export default AllRoutes;