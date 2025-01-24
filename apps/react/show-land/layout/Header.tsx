import styled from "styled-components";

import Section from "./Section";
import TopNav from "../components/TopNav";
import Hero from "../components/Hero";

const StyledHeader = styled(Section)`
  background-image: var(--gradient-primary);
  display: flex;
  flex-direction: column;
  height: 100dvh;
  overflow: hidden;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader as="header">
      <TopNav />
      <Hero />
    </StyledHeader>
  );
};

export default Header;
