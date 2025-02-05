import styled, { css } from "styled-components";
import generateMediaQuery from "../../shared/generateMediaQuery";
import { fontSizes, fontWeights, spaces } from "../../shared/styleVariables";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding-block: ${spaces[16]};
  gap: ${spaces[8]};
  background-color: var(--color-fourth);
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
