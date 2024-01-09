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
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/productDetail/:productIndex" element={<ProductDetail/>}/>
                <Route exact path="/my-profile" element={<MyProfile/> }/>
            </Routes>
        
    );
};

export default Routers;
