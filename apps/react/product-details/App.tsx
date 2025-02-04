import React from "react";
import GlobalStyle from "./GlobalStyle";
import Header from "./layout/Header";
import Hero from "./layout/Hero";
import Built from "./layout/Built";
import Create from "./layout/Create";
const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Built />
      <Create />
    </>
  );
};

export default App;
