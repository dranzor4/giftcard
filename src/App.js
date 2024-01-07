// import React, { useState } from 'react'
// import appService from './service/AppService'
// const App = () => {
//   const [a, setA] = useState(10)
// const UpdateHandler=()=>{
//   let b =  appService.UpdateAppService(a);
//   setA(b);
// }

//   return (
//     <div>{a}
//     <button onClick={UpdateHandler}>Click</button></div>
//   )
// }

// export default App

import { BrowserRouter as Router } from 'react-router-dom';

import Layout from "./layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./variable.css"
import "./App.css"
const App = () => {
  return (
    <>
    <Router>
      <Layout />
    </Router>
    </>
  );
};

export default App;
