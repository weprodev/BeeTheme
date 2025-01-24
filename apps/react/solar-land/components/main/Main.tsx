import React from "react";
import Hero from "./Hero/Hero";
import styled from "styled-components";

export const MainStyle = styled.main``;

const Main: React.FC = () => {
  return (
    <MainStyle>
      <Hero />
    </MainStyle>
  );
};

export default Main;
