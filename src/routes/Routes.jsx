// App.jsx
import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import ProductDetail from '../components/productDetail/ProductDetail';
import MyProfile from '../pages/mygiftcard';
import CalculatorModal from '../components/Calculator';
import MyGiftCard from '../pages/mygiftcard';
import Checkout from '../pages/checkout';



const Routers = () => {
    return (
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/productDetail/:productIndex" element={<ProductDetail/>}/>
                <Route exact path="/my-profile" element={<MyProfile/> }/>
                <Route path="/calculator" element={<CalculatorModal/> }/>
                <Route path="/my-gift-card" element={<MyGiftCard/> }/>
                <Route  path="/checkout" element={<Checkout/>} />

            </Routes>
    );
};

export default Routers;
