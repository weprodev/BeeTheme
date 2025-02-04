import styled, { css } from "styled-components";
import generateMediaQuery from "../../shared/generateMediaQuery";
import {
  borderRadius,
  fontSizes,
  fontWeights,
  spaces,
} from "../../shared/styleVariables";

export const Div = styled.div`
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
`;

export const Section = styled.section`
  display: flex;
  padding-block: 8rem;
  gap: ${spaces[16]};
  align-items: center;
  width: 100%;
  padding: 8rem 15rem;
  ${generateMediaQuery(
    "laptop",
    css`
      flex-direction: column;
      padding-block: ${spaces[16]};
    `
  )}

  ${generateMediaQuery(
    "laptop",
    css`
      padding: 0 ${spaces[6]};
      padding-block: ${spaces[16]};
    `
  )}
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${spaces[10]};
  align-items: flex-start;
`;

export const Heading = styled.h3`
  font-size: ${fontSizes.xl4};
  font-weight: ${fontWeights.medium};
  color: var(--color-white);
`;
export const Paragraph = styled.p`
  font-size: ${fontSizes.xl};
  line-height: 1.7;
  color: var(--color-white);
`;

export const Button = styled.button`
  background-color: var(--color-fifth);
  color: #fff;
  border-radius: ${borderRadius.full};
  border: none;
  padding: ${spaces[3]} ${spaces[10]};
  font-size: ${fontSizes.xl};
  font-weight: ${fontWeights.semiBold};
  transition: 300ms;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    background-color: #2eb76e;
  }
`;

export const Img = styled.img`
  ${generateMediaQuery(
    "mobile",
    css`
      display: none;
    `
  )}
`;
