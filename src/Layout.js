import React from "react";
import "./Layout.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
