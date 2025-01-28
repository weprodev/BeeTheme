import React from "react";
import Hero from "./Hero/Hero";
import styled from "styled-components";
import Customers from "./Customers/Customers";
import Features from "./Features/Features";
import Trusted from "./Trusted/Trusted";
import CaseStudy from "./CaseStudy/CaseStudy";

export const MainStyle = styled.main``;

const Main: React.FC = () => {
  return (
    <MainStyle>
      <Hero />
      <Customers />
      <Features />
      <Trusted />
      <CaseStudy />
    </MainStyle>
  );
};

export default Main;
