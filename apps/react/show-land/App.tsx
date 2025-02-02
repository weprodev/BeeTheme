import React from "react";
import GlobalStyle from "./GlobalStyle";

import Header from "./layout/Header";
import SuperFast from "./layout/SuperFast";
import HomePages from "./layout/HomePages";
import PageBuilder from "./layout/PageBuilder";
import Benefits from "./layout/Benefits";
import Features from "./layout/Features";
import PowerfulFeatures from "./layout/PowerfulFeatures";
import HelpUsers from "./layout/HelpUsers";
import Trusted from "./layout/Trusted";
import Footer from "./layout/Footer";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SuperFast />
      <HomePages />
      <PageBuilder />
      <Benefits />
      <Features />
      <PowerfulFeatures />
      <HelpUsers />
      <Trusted />
      <Footer />
    </>
  );
};

export default App;
