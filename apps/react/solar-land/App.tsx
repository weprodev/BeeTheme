import * as React from "react";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import Hero from "./components/Hero";
import Customers from "./components/Customers";
import Features from "./components/Features";
import Trusted from "./components/Trusted";
import CaseStudy from "./components/CaseStudy";
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
