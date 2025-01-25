import React from "react";
import Hero from "./Hero/Hero";
import styled from "styled-components";
import Customers from "./Customers/Customers";
import Features from "./Features/Features";
import Trusted from "./Trusted/Trusted";

export const MainStyle = styled.main``;

const Main: React.FC = () => {
  return (
    <MainStyle>
      <Hero />
      <Customers />
      <Features />
      <Trusted />
    </MainStyle>
  );
};

export default Main;
