import * as React from "react";
import Header from "./components/Header/Header";
import GlobalStyle from "./GlobalStyle";
import Main from "./components/main/Main";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
};

export default App;
