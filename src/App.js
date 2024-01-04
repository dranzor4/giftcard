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

const App = () => {
  return (
    <>
      <Layout />
    </>
  );
};

export default App;
