import styled, { css } from "styled-components";
import generateMediaQuery from "../../shared/generateMediaQuery";
import { fontSizes, fontWeights, spaces } from "../../shared/styleVariables";
export const Div = styled.div`
  width: 100%;
  padding-left: 15rem;
  ${generateMediaQuery(
    "laptop",
    css`
      padding-left: ${spaces[6]};
    `
  )}
`;
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 8rem;
  gap: 8rem;
  background-color: var(--color-white);
  padding-right: 0;
  overflow-x: hidden;
`;

export const Heading = styled.h2`
  font-size: ${fontSizes.xl5};
  color: var(--color-black);
  text-align: center;
  font-weight: ${fontWeights.medium};
  padding-right: 15rem;
  ${generateMediaQuery(
    "laptop",
    css`
      padding-right: 1.5rem;
    `
  )}
`;

export const BuiltFeatures = styled.div`
  display: flex;
  gap: 8rem;
  overflow: auto;
  padding: ${spaces[4]};
  padding-left: 0;
  ${generateMediaQuery(
    "laptop",
    css`
      flex-wrap: wrap;
    `
  )}
  & > * {
    flex: 1 0 60%;
    height: 28rem;
    ${generateMediaQuery(
      "mobile",
      css`
        height: auto;
      `
    )}
  }
`;
export const Features = styled.div`
  display: flex;
  gap: ${spaces[16]};
  ${generateMediaQuery(
    "mobile",
    css`
      gap: ${spaces[8]};
    `
  )}
`;
export const FeatureInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spaces[8]};
  flex-basis: 50%;
  justify-content: space-between;
  ${generateMediaQuery(
    "mobile",
    css`
      flex-basis: 100%;
    `
  )}
`;
export const FeatureTopic = styled.span`
  color: var(--color-secondary);
  font-size: ${fontSizes.xl};
  letter-spacing: 0.2rem;
  font-weight: ${fontWeights.medium};
`;

export const HeadingTitle = styled.h4`
  color: var(--color-black);
  font-size: ${fontSizes.xl3};
  font-weight: ${fontWeights.medium};
`;

export const Paragraph = styled.p`
  font-size: ${fontSizes.xl};
  line-height: 1.7;
  color: var(--color-black);
`;

export const Link = styled.a`
  color: var(--color-secondary);
`;

export const FeatureImg = styled.div`
  overflow: hidden;
  flex-basis: 50%;
  ${generateMediaQuery(
    "mobile",
    css`
      display: none;
    `
  )}
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
