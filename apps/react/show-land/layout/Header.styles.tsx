import styled, { css } from "styled-components";
import { NavLink as ReactRouterNavLink } from "react-router-dom";
import { ReactElement } from "react";

import {
  borderRadius,
  fontSizes,
  fontWeights,
  spaces,
} from "../../shared/styleVariables";
import generateMediaQuery from "../../shared/generateMediaQuery";
import Section from "../components/Section";
import Heading from "../components/Heading";

interface NavLinksProps {
  isOpen: boolean;
  children?: ReactElement[];
}

export const StyledHeader = styled(Section)`
  background-image: var(--gradient-primary);
  display: flex;
  flex-direction: column;
  height: 100dvh;
  overflow: hidden;
`;

export const Nav = styled.nav`
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
export const NavButtonToggle = styled.button`
  background-color: transparent;
  display: none;
  border: none;
  cursor: pointer;
  ${generateMediaQuery("tablet", `display:block`)}
`;
export const NavCloseButton = styled(NavButtonToggle)`
  position: absolute;
  top: 1rem;
  right: 2rem;
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${spaces[6]};
  text-align: center;
  flex-grow: 1;
`;
export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spaces[4]};
  margin: auto 0;
  ${generateMediaQuery(
    "mobile",
    css`
      gap: ${spaces[12]};
      font-size: ${fontSizes.lg};
    `
  )}
`;
export const HeroTag = styled.span`
  font-size: ${fontSizes.sm};
  font-weight: ${fontWeights.bold};
  text-transform: uppercase;
  ${generateMediaQuery(
    "laptop",
    css`
      font-size: ${fontSizes.lg};
    `
  )}
`;
export const HeroHeading = styled(Heading)`
  width: 60%;
  ${generateMediaQuery(
    "mobile",
    css`
      width: auto;
    `
  )}
`;

export const MiniGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  border: 0.1rem solid var(--color-fourth);
  border-radius: ${borderRadius.xl3};
  padding: ${spaces[4]};
  gap: ${spaces[4]};
  align-items: stretch;
  margin-bottom: -8rem;
  height: 50vh;
  width: 70%;
  ${generateMediaQuery(
    "laptop",
    css`
      height: 40vh;
      margin-bottom: -5rem;
    `
  )}
  ${generateMediaQuery(
    "miniLaptop",
    css`
      display: none;
    `
  )}
`;
export const MiniGalleryImg = styled.img`
  object-fit: cover;
  border-radius: ${borderRadius.xl};
  &:nth-child(1) {
    grid-column: 1 / span 1;
    grid-row: 1 / 3;
  }
  &:nth-child(2) {
    grid-column: 2 / span 2;
    grid-row: 1 / 3;
  }
  &:nth-child(3) {
    grid-column: 4 / span 2;
    grid-row: 1 / 3;
  }
  &:nth-child(4) {
    grid-column: 6 / span 1;
    grid-row: 1 / 3;
  }
  &:nth-child(5) {
    grid-column: 1 / span 2;
    grid-row: 3/ 4;
  }
  &:nth-child(6) {
    grid-column: 3 / span 2;
    grid-row: 3 / 4;
  }
  &:nth-child(7) {
    grid-column: 5 / span 2;
    grid-row: 3/ 4;
  }
`;
