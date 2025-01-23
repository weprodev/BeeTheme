import styled, { css } from "styled-components";
import Section from "../components/Section";
import { borderRadius, fontSizes, fontWeights, spaces } from "../../shared/styleVariables";
import generateMediaQuery from "../../shared/generateMediaQuery";
import Heading from "../components/Heading";

export const StyledHeader = styled(Section)`
  background-image: var(--gradient-primary);
  display: flex;
  flex-direction: column;
  height: 100dvh;
  overflow: hidden;
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
export const HeroText = styled.div`
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
export const Tag = styled.span`
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
export const ImgGallery = styled.img`
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
