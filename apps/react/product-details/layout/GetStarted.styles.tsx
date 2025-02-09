import styled, { css } from "styled-components";
import {
  borderRadius,
  fontSizes,
  fontWeights,
  spaces,
} from "../../shared/styleVariables";
import generateMediaQuery from "../../shared/generateMediaQuery";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding-block: ${spaces[32]};
  gap: ${spaces[8]};
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 8rem 15rem;
  background-image: var(--color-primary);
  background-size: 500%;
  transition: animation 4s;
  animation: background-movement 5s infinite alternate;
  @keyframes background-movement {
    from {
      background-position: 100% 100%;
    }
    to {
      background-position: 0% 0%;
    }
  }
  ${generateMediaQuery(
    "laptop",
    css`
      padding: ${spaces[16]} ${spaces[6]};
    `
  )}
`;

export const Heading = styled.h2`
  color: var(--color-white);
  font-weight: ${fontWeights.medium};
  font-size: ${fontSizes.xl5};
`;

export const Paragraph = styled.p`
  font-size: ${fontSizes.xl};
  line-height: 1.7;
  color: var(--color-white);
  width: 70%;
  ${generateMediaQuery(
    "mobile",
    css`
      width: 100%;
    `
  )}
`;

export const ButtonInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${spaces[8]};
  ${generateMediaQuery(
    "mobile",
    css`
      flex-direction: column;
    `
  )}
`;

export const ButtonStarted = styled.button`
  border-radius: ${borderRadius.full};
  font-weight: ${fontWeights.semiBold};
  padding: ${spaces[3]} ${spaces[10]};
  font-size: ${fontSizes.xl};
  text-transform: uppercase;
  transition: 300ms;
  border: 2px solid var(--color-white);
  color: var(--color-white);
  background-color: transparent;
  &:hover {
    border: 2px solid var(--color-white);
    color: var(--color-tertiary);
    background-color: var(--color-white);
    cursor: pointer;
  }
`;

export const ButtonPro = styled.button`
  border-radius: ${borderRadius.full};
  font-weight: ${fontWeights.semiBold};
  padding: ${spaces[3]} ${spaces[10]};
  font-size: ${fontSizes.xl};
  text-transform: uppercase;
  transition: 300ms;
  border: 2px solid var(--color-white);
  color: var(--color-tertiary);
  background-color: var(--color-white);
  &:hover {
    border: 2px solid var(--color-white);
    color: var(--color-white);
    background-color: transparent;
    cursor: pointer;
  }
`;
