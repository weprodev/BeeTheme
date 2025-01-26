import * as React from "react";
import Header from "./components/Header/Header";
import GlobalStyle from "./GlobalStyle";
import Main from "./components/main/Main";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
