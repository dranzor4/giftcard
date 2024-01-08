// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import MyProfile from '../pages/myprofile';



const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/my-profile" element={<MyProfile/> }/>
            </Routes>
        </Router>
    );
};

export default App;
