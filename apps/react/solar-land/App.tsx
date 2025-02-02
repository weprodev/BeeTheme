import * as React from "react";
import GlobalStyle from "./GlobalStyle";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import styled from "styled-components";
import Hero from "./layout/Hero";
import Customers from "./layout/Customers";
import Features from "./layout/Features";
import Trusted from "./layout/Trusted";
import CaseStudy from "./layout/CaseStudy";
export const Main = styled.main``;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <Hero />
        <Customers />
        <Features />
        <Trusted />
        <CaseStudy />
      </Main>
      <Footer />
    </>
  );
};

export default App;
