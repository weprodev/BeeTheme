import styled, { css } from "styled-components";
import generateMediaQuery from "../../shared/generateMediaQuery";
import {
  borderRadius,
  fontSizes,
  fontWeights,
  spaces,
} from "../../shared/styleVariables";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding-block: ${spaces[16]};
  gap: ${spaces[16]};
  text-align: center;
  width: 100%;
  padding: ${spaces[16]} 15rem;
  ${generateMediaQuery(
    "laptop",
    css`
      padding: ${spaces[16]} ${spaces[6]};
    `
  )}
`;

export const Heading = styled.h2`
  font-size: ${fontSizes.xl5};
  font-weight: ${fontWeights.medium};
  color: var(--color-black);
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: ${spaces[4]};
  flex-wrap: wrap;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: ${spaces[6]};
  padding: ${spaces[4]};
  box-shadow: var(--shadow-secondary);
  flex: 1 0 20%;

  ${generateMediaQuery(
    "laptop",
    css`
      flex: 1 0 40%;
    `
  )}
  ${generateMediaQuery(
    "mobile",
    css`
      flex: 1 0 100%;
    `
  )}
`;
export const Img = styled.img`
  width: auto;
  margin: ${spaces[4]};
`;
export const CardHeading = styled.h3`
  font-size: ${fontSizes.xl};
  font-weight: ${fontWeights.medium};
  color: var(--color-black);
`;

export const CardParagraph = styled.p`
  font-size: ${fontSizes.base};
  color: var(--color-seventh);
`;
export const Link = styled.a`
  color: var(--color-secondary);
`;
