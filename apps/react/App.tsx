import React from "react";
import { Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      Hello, World! <br />
      <Link to={"/event-land"}> Event Land </Link>
    </>
  );
};

export default App;
