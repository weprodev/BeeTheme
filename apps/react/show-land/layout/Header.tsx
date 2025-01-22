import styled from "styled-components";

import Section from "./Section";
import TopNav from "../components/TopNav";

const StyledHeader = styled(Section)`
  background-image: var(--gradient-primary);
  display: flex;
  flex-direction: column;
  height: 100dvh;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader as="header">
      <TopNav />
    </StyledHeader>
  );
};

export default Header;
