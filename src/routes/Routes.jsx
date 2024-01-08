// App.jsx
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import ProductDetail from '../components/productDetail/ProductDetail';



const Routers = () => {
    return (
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/productDetail" element={<ProductDetail/>}/>
            </Routes>
        
    );
};

export default Routers;
