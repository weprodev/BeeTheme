import styled, { css } from "styled-components";
import { ReactElement } from "react";
import { NavLink as ReactRouterNavLink } from "react-router-dom";

import { fontSizes, fontWeights, spaces } from "../../shared/styleVariables";
import generateMediaQuery from "../../shared/generateMediaQuery";

interface NavLinksProps {
  isOpen: boolean;
  children?: ReactElement[];
}

export const StyledTopNav = styled.nav`
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
export const Logo = styled.span`
  font-size: ${fontSizes.xl4};
`;
export const NavLinks = styled.ul<NavLinksProps>`
  display: flex;
  align-items: center;
  gap: ${spaces[6]};
  ${generateMediaQuery(
    "tablet",
    css`
      display: ${(props: NavLinksProps) => (props.isOpen ? "flex" : "none")};
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
export const NavLink = styled(ReactRouterNavLink)`
  text-transform: uppercase;
`;
export const ToggleNavButton = styled.button`
  background-color: transparent;
  display: none;
  border: none;
  cursor: pointer;
  ${generateMediaQuery("tablet", `display:block`)}
`;
export const CloseButton = styled(ToggleNavButton)`
  position: absolute;
  top: 1rem;
  right: 2rem;
`;
