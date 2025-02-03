import React from "react";
import GlobalStyle from "./GlobalStyle";
import Header from "./layout/Header";
import Hero from "./layout/Hero";
const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
    </>
  );
};

export default App;
