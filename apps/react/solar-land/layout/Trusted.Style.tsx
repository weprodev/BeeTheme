import generateMediaQuery from "../../shared/generateMediaQuery";
import {
  borderRadius,
  fontSizes,
  fontWeights,
  spaces,
} from "../../shared/styleVariables";
import styled, { css } from "styled-components";

export const TrustedList = styled.section`
  margin: 0 auto;
`;

export const TrustedMain = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: ${spaces[1]} ${spaces[10]};
  padding: ${spaces[12]} 0;

  ${generateMediaQuery(
    "laptop",
    css`
      grid-template-rows: repeat(4, 1fr);
      gap: ${spaces[2]};
    `
  )}

  ${generateMediaQuery(
    "mobile",
    css`
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      padding: ${spaces[4]} ${spaces[2]};
    `
  )}
`;

export const TrustedHeader = styled.div`
  grid-area: 1 / 1 / 3 / 3;

  ${generateMediaQuery(
    "laptop",
    css`
      grid-area: 1 / 1 / 2 / 3;
    `
  )}

  ${generateMediaQuery(
    "mobile",
    css`
      grid-area: 1 / 1 / 2 / 3;
    `
  )}
`;

export const TrustedTitle = styled.h2`
  font-size: ${fontSizes.xl6};
  font-weight: ${fontWeights.bold};
  margin-bottom: ${spaces[4]};

  ${generateMediaQuery(
    "laptop",
    css`
      font-size: ${fontSizes.xl4};
    `
  )}
`;

export const Span = styled.span`
  color: var(--secondary-color);
`;

export const TrustedButton = styled.button`
  background: var(--primary-color);
  color: var(--dark-color);
  border: none;
  border-radius: ${borderRadius.full};
  padding: ${spaces[4]};
  font-size: 1em;
  font-weight: 400;
  transition: 150ms;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: rgb(34.52, 241.48, 152.04);
  }
`;

export const Svg = styled.svg`
  width: 1.2em;
  height: 1.2em;
  padding-left: ${spaces[1]};
  padding-top: ${spaces[1]};
  display: inline-block;
`;

export const TrustedCards = styled.div`
  font-size: ${fontSizes.xl2};
  grid-area: 3 / 1 / 6 / 3;
  margin-top: ${spaces[4]};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${spaces[4]};

  ${generateMediaQuery(
    "laptop",
    css`
      margin-top: 0;
      grid-area: 2 / 1 / 5 / 3;
      gap: ${spaces[2]};
    `
  )}

  ${generateMediaQuery(
    "mobile",
    css`
      grid-area: 2/1/4/3;
      margin-top: 0;
    `
  )}
`;

export const TrustedCard = styled.div`
  padding: ${spaces[4]};
  border: 1px solid rgb(223.2735849057, 225.5, 227.7264150943);
  border-radius: ${borderRadius.xl2};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${generateMediaQuery(
    "laptop",
    css`
      padding: ${spaces[2]};
    `
  )}
`;

export const TrustedCardSpan = styled.span`
  color: var(--secondary-color);
`;

export const A = styled.a.attrs({
  href: "#",
})`
  font-size: ${fontSizes.sm};
  text-decoration: underline;
`;

export const TrustedImg = styled.div`
  grid-area: 1 / 3 / 6 / 5;
`;

export const Img = styled.img`
  border-radius: ${borderRadius.xl2};
  object-fit: cover;
  width: 100%;
  height: 63em;

  ${generateMediaQuery(
    "laptop",
    css`
      height: 46.5em;
    `
  )}

  ${generateMediaQuery(
    "mobile",
    css`
      display: none;
    `
  )}
`;
