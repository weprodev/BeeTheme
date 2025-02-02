import generateMediaQuery from "../../shared/generateMediaQuery";
import { borderRadius, fontSizes, spaces } from "../../shared/styleVariables";
import styled, { css } from "styled-components";

export const FeaturesList = styled.section`
  background-color: rgb(223.2735849057, 225.5, 227.7264150943);
  margin: ${spaces[12]} auto ${spaces[4]};
  padding: ${spaces[12]} 0;
`;

export const Container = styled.div`
  margin: 0 auto;
`;

export const FeaturesTitle = styled.h2`
  font-size: ${fontSizes.xl7};
  text-align: center;
  margin: 0 auto ${spaces[2]};
  width: 65%;

  ${generateMediaQuery(
    "laptop",
    css`
      font-size: ${fontSizes.xl5};
      width: 100%;
    `
  )}

  ${generateMediaQuery(
    "mobile",
    css`
      font-size: ${fontSizes.xl3};
      width: 100%;
    `
  )}
`;

export const Span = styled.span`
  color: var(--secondary-color);
`;

export const FeaturesCards = styled.div`
  background-color: var(--light-color);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 0.5px solid rgb(223.2735849057, 225.5, 227.7264150943);
  border-radius: ${borderRadius.xl3};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  ${generateMediaQuery(
    "laptop",
    css`
      grid-template-columns: repeat(2, 1fr);
    `
  )}

  ${generateMediaQuery(
    "mobile",
    css`
      grid-template-columns: 1fr;
    `
  )}
`;

export const FeaturesCard = styled.div`
  padding: ${spaces[6]};
  border-right: 0.5px solid rgb(223.2735849057, 225.5, 227.7264150943);
  border-bottom: 0.5px solid rgb(223.2735849057, 225.5, 227.7264150943);

  &:nth-child(3),
  &:nth-child(6) {
    border-right: none;
  }

  &:nth-child(n + 4):nth-child(-n + 6) {
    border-bottom: none;
  }

  ${generateMediaQuery(
    "laptop",
    css`
      &:nth-child(3),
      &:nth-child(6) {
        border-right: inherit;
      }

      &:nth-child(n + 4):nth-child(-n + 6) {
        border-bottom: inherit;
      }
    `
  )}
`;

export const Svg = styled.svg`
  width: 3em;
  height: 3em;
  fill: rgb(34.52, 241.48, 152.04);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: ${spaces[2]};
`;

export const FeaturesCardTitle = styled.h3`
  font-size: ${fontSizes.xl2};
  margin: ${spaces[4]} 0 ${spaces[2]};
`;
