import React from "react";
import Hero from "./Hero/Hero";
import styled from "styled-components";
import Customers from "./Customers/Customers";

export const MainStyle = styled.main``;

const Main: React.FC = () => {
  return (
    <MainStyle>
      <Hero />
      <Customers />
    </MainStyle>
  );
};

export default Main;
