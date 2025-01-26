import React from "react";
import Hero from "./Hero/Hero";
import styled from "styled-components";
import Customers from "./Customers/Customers";
import Features from "./Features/Features";

export const MainStyle = styled.main``;

const Main: React.FC = () => {
  return (
    <MainStyle>
      <Hero />
      <Customers />
      <Features />
    </MainStyle>
  );
};

export default Main;
