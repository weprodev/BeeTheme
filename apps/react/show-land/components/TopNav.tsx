import styled from "styled-components";
import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { fontSizes, fontWeights, spaces } from "../../shared/styleVariables";
import NavLinks from "./NavLinks";
import ToggleNavButton from "./ToggleNavButton"

/*------------------------------------*\
  #STYLES
\*------------------------------------*/

const StyledNav = styled.nav`
  font-weight: ${fontWeights.bold};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: ${spaces[4]};
  gap: ${spaces[4]};
  & * {
    flex-shrink: 0;
  }
`;
const Logo = styled.span`
  font-size: ${fontSizes.xl4};
`;

/*------------------------------------*\
  #MARKUP
\*------------------------------------*/

const TopNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledNav>
      <Logo>WeProDev</Logo>
      <NavLinks isOpen={isOpen} setIsOpen={setIsOpen} />
      <ToggleNavButton onClick={() => setIsOpen(true)} type="open">
        <FontAwesomeIcon
          icon={faBars}
          size="3x"
          color="var(--color-grey-dark-3)"
        />
      </ToggleNavButton>
    </StyledNav>
  );
};

export default TopNav;
