import styled, { css } from "styled-components";
import generateMediaQuery from "../../../shared/generateMediaQuery";
import {
  borderRadius,
  fontSizes,
  fontWeights,
  spaces,
} from "../../../shared/styleVariables";

export const StyleHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spaces[4]} ${spaces[8]};
  background-color: #fff;
  margin: 0 auto;

  ${generateMediaQuery(
    "laptop",
    css`
      padding: ${spaces[2]};
    `
  )}
`;

export const Img = styled.img`
  height: 2.5rem;
  width: auto;
`;

export const Navigation = styled.nav`
  ${generateMediaQuery(
    "laptop",
    css`
      display: none;
      flex-direction: column;
      gap: ${spaces[2]};

      &.active {
        display: flex;
        position: absolute;
        top: 4em;
        left: 0;
        right: 0;
        background-color: #fff;
        padding: ${spaces[4]};
        padding-bottom: ${spaces[16]};
        width: 100%;
        z-index: 10;
      }
    `
  )}
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  gap: ${spaces[8]};

  ${generateMediaQuery(
    "laptop",
    css`
      flex-direction: column;
    `
  )}
`;

export const A = styled.a`
  text-decoration: none;
  color: var(--dark-color);
  font-weight: ${fontWeights.regular};
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color);
  }
`;

export const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  gap: 0.3rem;
  background: none;
  border: none;
  cursor: pointer;

  ${generateMediaQuery(
    "laptop",
    css`
      display: flex;
    `
  )}

  &.active span:nth-child(1) {
    transform: translateY(0.5rem) rotate(45deg);
  }
  &.active span:nth-child(2) {
    opacity: 0;
  }
  &.active span:nth-child(3) {
    transform: translateY(-0.5rem) rotate(-45deg);
  }
`;

export const Span = styled.span`
  display: block;
  width: 1.5rem;
  height: 0.2rem;
  background-color: var(--dark-color);
  transition: transform 0.3s ease;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;

  ${generateMediaQuery(
    "laptop",
    css`
      display: none;

      &.active {
        display: flex;
        flex-direction: row;
        gap: ${spaces[2]};
        padding-top: ${spaces[2]};
        width: 100%;
        align-items: center;
        position: absolute;
        top: 20em;
        z-index: 11;
      }
    `
  )}
`;

export const Login = styled.button`
  background: none;
  color: var(--dark-color);
  border: 1px solid var(--light-color);
  border-radius: ${borderRadius.full};
  font-weight: ${fontWeights.regular};
  padding: ${spaces[2]} ${spaces[4]};
  font-size: ${fontSizes.base};
  transition: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: var(--light-color);
  }
`;

export const GetInTouch = styled.button`
  background-color: var(--primary-color);
  color: var(--dark-color);
  border-radius: ${borderRadius.full};
  border: none;
  padding: ${spaces[2]} ${spaces[4]};
  font-size: ${fontSizes.base};
  font-weight: ${fontWeights.regular};
  transition: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: rgb(34.52, 241.48, 152.04);
  }
`;

export const Li = styled.li``;

export const Logo = styled.div``;
