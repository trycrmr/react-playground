import React from "react";
import "./Layout.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { Container } from "@material-ui/core";
const Layout = () => {
  return (
    <Container maxWidth="lg">
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};

export default Layout;
