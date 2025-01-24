import React from "react";
import GlobalStyle from "./GlobalStyle";

import Header from "./layout/Header";
import SuperFast from "./layout/SuperFast";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <SuperFast />
    </>
  );
};

export default App;
