import generateMediaQuery from "../../shared/generateMediaQuery";
import {
  borderRadius,
  fontSizes,
  fontWeights,
  spaces,
} from "../../shared/styleVariables";
import styled, { css } from "styled-components";

export const CaseStudyList = styled.section`
  margin: 0 auto;
  padding: ${spaces[12]} 0;

  ${generateMediaQuery(
    "mobile",
    css`
      margin: 0 auto;
      padding: ${spaces[6]} 0;
    `
  )}
`;

export const CaseStudyHeaderTitle = styled.h2`
  font-size: ${fontSizes.xl5};
  text-align: center;
  width: 50%;
  margin: 0 auto;

  ${generateMediaQuery(
    "mobile",
    css`
      font-size: ${fontSizes.xl3};
      text-align: center;
      width: 100%;
      margin: 0 auto;
    `
  )}
`;

export const Span = styled.span`
  color: var(--secondary-color);
`;

export const CaseStudyCard = styled.div`
  background: var(--light-color);
  padding: ${spaces[2]};
  margin: ${spaces[8]} auto;
  border-radius: ${borderRadius.lg};
  display: flex;
  gap: ${spaces[8]};

  ${generateMediaQuery(
    "mobile",
    css`
      flex-direction: column;
    `
  )}
`;

export const CaseStudyInfo = styled.div`
  padding: ${spaces[4]};
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CaseStudyTitle = styled.h2`
  font-size: ${fontSizes.xl2};
  font-weight: ${fontWeights.bold};
  margin-bottom: ${spaces[4]};
`;

export const CaseStudyText = styled.p`
  font-size: ${fontSizes.base};
`;

export const CaseStudyButton = styled.button`
  background: var(--primary-color);
  color: var(--dark-color);
  border: none;
  border-radius: ${borderRadius.full};
  padding: ${spaces[3]};
  font-size: 1em;
  font-weight: 400;
  transition: 150ms;
  text-align: center;
  cursor: pointer;
  width: max-content;
  margin-top: ${spaces[4]};

  &:hover {
    background-color: rgb(34.52, 241.48, 152.04);
  }
`;

export const CaseStudyAuthor = styled.p`
  font-size: ${fontSizes.base};
  font-weight: ${fontWeights.bold};
  margin-top: ${spaces[8]};
`;

export const CaseStudyAuthorSpan = styled.span`
  color: var(--secondary-color);
  font-weight: ${fontWeights.regular};
`;

export const CaseStudyImg = styled.div`
  flex: 4;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${borderRadius.lg};
`;
