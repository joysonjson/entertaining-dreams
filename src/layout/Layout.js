import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main style={{ height: "calc(100vh - 96px - 155px)" }}>{children}</main>
      <Footer />
    </Container>
  );
};
