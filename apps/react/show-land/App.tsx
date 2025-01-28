import React from "react";
import GlobalStyle from "./GlobalStyle";

import Header from "./layout/Header";
import SuperFast from "./layout/SuperFast";
import HomePages from "./layout/HomePages";
import PageBuilder from "./layout/PageBuilder";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SuperFast />
      <HomePages />
      <PageBuilder />
    </>
  );
};

export default App;
