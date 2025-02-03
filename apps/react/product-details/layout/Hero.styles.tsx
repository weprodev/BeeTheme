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
  padding: ${spaces[16]} 15rem;
  display: flex;
  flex-direction: column;
  gap: ${spaces[16]};
  padding-block: ${spaces[16]};
  text-align: center;
  ${generateMediaQuery(
    "laptop",
    css`
      padding: ${spaces[16]} ${spaces[6]};
    `
  )}
  ${generateMediaQuery(
    "mobile",
    css`
      padding: ${spaces[16]} ${spaces[6]};
    `
  )}
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spaces[14]};
`;

export const Heading = styled.h1`
  font-size: ${fontSizes.xl6};
  font-weight: ${fontWeights.medium};
`;
export const Paragraph = styled.p`
  font-size: ${fontSizes.xl};
  line-height: 1.7;
`;
export const Button = styled.a`
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
  border-radius: ${borderRadius.lg};
`;
export const FeaturesContainer = styled.div`
  display: flex;
  gap: ${spaces[16]};
  color: var(--color-white);
  ${generateMediaQuery(
    "miniLaptop",
    css`
      flex-direction: column;
    `
  )}
`;
export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spaces[8]};
  align-items: center;
`;
export const HeadingInfo = styled.h4`
  font-size: ${fontSizes.xl3};
  color: var(--color-white);
`;
