import styled, { css } from "styled-components";
import Section from "../components/Section";
import { spaces } from "../../shared/styleVariables";
import generateMediaQuery from "../../shared/generateMediaQuery";

export const StyledFeatures = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-twelfth);
  padding-block: ${spaces[20]};
  gap: ${spaces[4]};
  text-align: center;
`;
export const FeaturesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${spaces[6]};
  margin-top: ${spaces[10]};

  & > * {
    width: 30%;
  }

  ${generateMediaQuery(
    "led",
    css`
      & > * {
        width: 23%;
      }
    `
  )}
  ${generateMediaQuery(
    "miniLaptop",
    css`
      gap: ${spaces[10]};
      & > * {
        width: 45%;
      }
    `
  )}
    ${generateMediaQuery(
    "mobile",
    css`
      gap: ${spaces[15]};
      & > * {
        width: 100%;
      }
    `
  )}
`;