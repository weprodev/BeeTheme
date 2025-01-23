import React from "react";
import { Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      Hello, World! <br />
      <Link to={"/event-land"}> Event Land </Link> 
      <br/>
      <Link to={"/show-land"}> Show Land </Link> 
      <br/>
      <Link to={"/solar-land"}> Solar Land </Link> 
    </>
  );
};

export default App;
