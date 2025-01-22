import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink as ReactRouterNavLink } from "react-router-dom";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";
import ToggleNavButton from "./ToggleNavButton";
import generateMediaQuery from "../../shared/generateMediaQuery";
import { ReactElement } from "react";
import { fontSizes, spaces } from "../../shared/styleVariables";

/*------------------------------------*\
  #TYPES
\*------------------------------------*/

interface StyledNavLinksProps {
  isOpen: boolean;
  children?: ReactElement[];
}
interface NavLinksProps {
  isOpen: boolean;
  setIsOpen: (a: boolean) => void;
}

/*------------------------------------*\
  #STYLES
\*------------------------------------*/

const StyledNavLinks = styled.ul<StyledNavLinksProps>`
  display: flex;
  align-items: center;
  gap: ${spaces[6]};
  ${generateMediaQuery(
    "tablet",
    css`
      display: ${(props: StyledNavLinksProps) =>
        props.isOpen ? "flex" : "none"};
      flex-direction: column;
      width: 100%;
      height: 100dvh;
      justify-content: center;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      position: fixed;
      background-color: var(--color-fifth);
      z-index: 10;
      font-size: ${fontSizes.xl};
      gap: ${spaces[8]};
    `
  )}
`;
const NavLink = styled(ReactRouterNavLink)`
  text-transform: uppercase;
`;
const CloseButton = styled(ToggleNavButton)`
  position: absolute;
  top: 1rem;
  right: 2rem;
`;

/*------------------------------------*\
  #MARKUP
\*------------------------------------*/

const NavLinks: React.FC<NavLinksProps> = ({ isOpen, setIsOpen }) => {
  return (
    <StyledNavLinks isOpen={isOpen}>
      <CloseButton onClick={() => setIsOpen(false)}>
        <FontAwesomeIcon
          icon={faClose}
          size="3x"
          color="var(--color-grey-dark-3)"
        ></FontAwesomeIcon>
      </CloseButton>
      <NavLink to="">Demos</NavLink>
      <NavLink to="">Mobile view</NavLink>
      <NavLink to="">Features</NavLink>
      <NavLink to="">Help & Support</NavLink>
      <Button>Purchase now</Button>
    </StyledNavLinks>
  );
};

export default NavLinks;
