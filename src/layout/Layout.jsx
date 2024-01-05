import React from "react";
import Header from "../components/header/Header";
import Routers from "../routes/Routes";
import  Carousel  from "../components/header/commonComponent/Carousel";

const Layout = () => {
  return (
    <>
      <Header />
      <Routers />
      <Carousel />
    </>
  );
};

export default Layout;
