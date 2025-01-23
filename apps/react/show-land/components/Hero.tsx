import styled from "styled-components";

import { spaces } from "../../shared/styleVariables";
import HeroText from "./HeroText";
import MiniGallery from "./MiniGallery";

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${spaces[6]};
  text-align: center;
  flex-grow: 1;
`;

const Hero = () => {
  return (
    <StyledHero>
      <HeroText />
      <MiniGallery />
    </StyledHero>
  );
};

export default Hero;
