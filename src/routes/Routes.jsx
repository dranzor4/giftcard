// App.jsx
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import ProductDetail from '../components/productDetail/ProductDetail';
import MyProfile from '../pages/myprofile';



const Routers = () => {
    return (
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/productDetail" element={<ProductDetail/>}/>
                <Route path="/my-profile" element={<MyProfile/> }/>
            </Routes>
        
    );
};

export default Routers;
