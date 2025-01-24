import styled, { css } from "styled-components";

import generateMediaQuery from "../../shared/generateMediaQuery";
import { borderRadius, spaces } from "../../shared/styleVariables";

/*------------------------------------*\
  #STYLES
\*------------------------------------*/

const StyledMiniGallery = styled.div`
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
const ImgGallery = styled.img`
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

/*------------------------------------*\
  #MARKUP
\*------------------------------------*/

const MiniGallery = () => {
  return (
    <StyledMiniGallery>
      <ImgGallery
        src="https://placehold.co/600x400/png"
        alt="Placeholder Image"
      />
      <ImgGallery
        src="https://placehold.co/600x400/png"
        alt="Placeholder Image"
      />
      <ImgGallery
        src="https://placehold.co/600x400/png"
        alt="Placeholder Image"
      />
      <ImgGallery
        src="https://placehold.co/600x400/png"
        alt="Placeholder Image"
      />
      <ImgGallery
        src="https://placehold.co/600x400/png"
        alt="Placeholder Image"
      />
      <ImgGallery
        src="https://placehold.co/600x400/png"
        alt="Placeholder Image"
      />
      <ImgGallery
        src="https://placehold.co/600x400/png"
        alt="Placeholder Image"
      />
    </StyledMiniGallery>
  );
};

export default MiniGallery;
