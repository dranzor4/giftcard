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

import Layout from "./layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./fonts/Poppins-Regular.ttf"
const App = () => {
  return (
    <>
      <Layout />
    </>
  );
};

export default App;
