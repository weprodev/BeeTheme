import React from "react";
import GlobalStyle from "./GlobalStyle";
import Header from "./layout/Header";
import Hero from "./layout/Hero";
import Built from "./layout/Built";
import Create from "./layout/Create";
import Elementor from "./layout/Elementor";
import Phenomenon from "./layout/Phenomenon";
import Resources from "./layout/Resources";
const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Built />
      <Create />
      <Elementor />
      <Phenomenon />
      <Resources />
    </>
  );
};

export default App;
