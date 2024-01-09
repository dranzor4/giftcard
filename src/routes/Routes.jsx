// App.jsx
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import MyProfile from '../pages/myprofile';
import CalculatorModal from '../components/Calculator';



const Routers = () => {
    return (
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/my-profile" element={<MyProfile/> }/>
                <Route path="/calculator" element={<CalculatorModal/> }/>
            </Routes>
        
    );
};

export default Routers;
