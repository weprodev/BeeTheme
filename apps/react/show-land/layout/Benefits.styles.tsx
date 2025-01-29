import styled, { css } from "styled-components";
import { spaces } from "../../shared/styleVariables";
import Section from "../components/Section";
import Box from "../components/Box";
import generateMediaQuery from "../../shared/generateMediaQuery";

export const StyledBenefits = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-block: ${spaces[20]};
  gap: ${spaces[4]};
  background-color: var(--color-sixth);
`;

export const Gallery = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: ${spaces[6]};
  margin: ${spaces[10]} 0;
  ${generateMediaQuery(
    "miniLaptop",
    css`
      display: flex;
      flex-direction: column;
      align-items: stretch;
    `
  )}
`;

export const GalleryBox = styled(Box)`
  &:nth-child(1) {
    grid-column: 1 / 4;
    grid-row: 1 / 2;
  }
  &:nth-child(2) {
    grid-column: 4 / 7;
    grid-row: 1 / 2;
  }

  &:nth-child(3) {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }

  &:nth-child(4) {
    grid-column: 3 / 5;
    grid-row: 2 / 3;
  }

  &:nth-child(5) {
    grid-column: 5 / 7;
    grid-row: 2 / 3;
  }
`;

export const GalleryBoxImg = styled.img`
  object-fit: cover;
  height: 20rem;
  ${generateMediaQuery(
    "mobile",
    css`
      height: auto;
    `
  )}
`;
