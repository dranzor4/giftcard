import React from "react";
import Header from "../components/Header";
import Routers from "../routes/Routes";
import DownBar from "../components/Downbar";

const Layout = () => {
  return (
    <>
      <Header />
      <Routers />
      <DownBar />
    </>
  );
};

export default Layout;



