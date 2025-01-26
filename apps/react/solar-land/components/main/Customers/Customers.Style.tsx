import generateMediaQuery from "../../../../shared/generateMediaQuery";
import { borderRadius, fontSizes, spaces } from "../../../../shared/styleVariables";
import styled, { css } from "styled-components";

export const CustomersList = styled.section`
  margin: ${spaces[12]} auto ${spaces[4]};

  ${generateMediaQuery(
    "mobile",
    css`
      margin: ${spaces[2]} auto;
    `
  )}
`;

export const CustomersHeader = styled.div`
  display: flex;
  gap: ${spaces[4]};
  margin: ${spaces[4]} auto ${spaces[8]};

  ${generateMediaQuery(
    "mobile",
    css`
      flex-direction: column;
      padding: ${spaces[3]};
    `
  )}
`;

export const CustomersTitle = styled.h2`
  font-size: ${fontSizes.xl4};
  flex: 0 50%;

  ${generateMediaQuery(
    "mobile",
    css`
      font-size: ${fontSizes.xl3};
    `
  )}
`;

export const Span = styled.span`
  color: var(--secondary-color);
`;

export const CustomersText = styled.p`
  font-size: ${fontSizes.lg};
  flex: 0 50%;
`;

export const CustomersIcons = styled.div`
  display: flex;
  flex-direction: row;

  ${generateMediaQuery(
    "mobile",
    css`
      flex-wrap: wrap;
      padding: ${spaces[3]};
    `
  )}
`;

export const CustomersIcon = styled.div`
  margin-right: ${spaces[4]};
  background-color: var(--light-color);
  padding: ${spaces[2]};
  border: 2px solid var(--light-color);
  border-radius: ${borderRadius.full};
  aspect-ratio: 1 / 1;
  transition: all 0.3s ease-in;
  box-sizing: border-box;

  ${generateMediaQuery(
    "mobile",
    css`
      flex: 1 1 32%;
      margin-right: ${spaces[1]};
    `
  )}
`;

export const Img = styled.img`
  width: 100%;
  top: 25%;
  position: relative;
  padding: ${spaces[4]};

  &:hover {
    background-color: var(--white-color);
    border: 2px solid var(--light-color);
  }
`;
