// App.jsx
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import MyProfile from '../pages/myprofile';



const Routers = () => {
    return (
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/my-profile" element={<MyProfile/> }/>
            </Routes>
        
    );
};

export default Routers;
