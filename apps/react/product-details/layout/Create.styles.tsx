import styled, { css } from "styled-components";
import generateMediaQuery from "../../shared/generateMediaQuery";
import {
  borderRadius,
  fontSizes,
  fontWeights,
  spaces,
} from "../../shared/styleVariables";

export const Div = styled.div`
  width: 100%;
  padding: ${spaces[16]} 15rem;
  ${generateMediaQuery(
    "laptop",
    css`
      padding: 0 ${spaces[6]};
    `
  )}
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: ${spaces[32]};
  gap: ${spaces[16]};
  text-align: center;
  ${generateMediaQuery(
    "mobile",
    css`
      padding-block: ${spaces[16]};
      gap: ${spaces[10]};
    `
  )}
`;

export const Heading = styled.h2`
  font-size: ${fontSizes.xl5};
  color: var(--color-black);
`;

export const Paragraph = styled.p`
  font-size: ${fontSizes.xl};
  line-height: 1.7;
  color: var(--color-seventh);
  width: 70%;
  text-align: center;

  ${generateMediaQuery(
    "mobile",
    css`
      width: 100%;
    `
  )};
`;

export const Link = styled.a`
  color: var(--color-secondary);
`;
export const Img = styled.img``;
