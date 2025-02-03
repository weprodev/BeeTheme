import React from "react";
import GlobalStyle from "./GlobalStyle";
import Header from "./layout/Header";
import Hero from "./layout/Hero";
import Built from "./layout/Built";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Built />

    </>
  );
};

export default App;
