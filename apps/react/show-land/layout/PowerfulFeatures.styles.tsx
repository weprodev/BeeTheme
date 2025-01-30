import styled, { css } from "styled-components";
import Section from "../components/Section";
import { spaces } from "../../shared/styleVariables";
import generateMediaQuery from "../../shared/generateMediaQuery";
import GeneralParagraph from "../components/Paragraph";

export const StyledPowerfulFeatures = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-sixth);
  padding-block: ${spaces[20]};
  padding-block: ${spaces[20]};
  text-align: center;
  gap: ${spaces[4]};
`;
export const Paragraph = styled(GeneralParagraph)`
  width: 55%;
  ${generateMediaQuery("laptop", "width:auto")}
`;
export const PowerfulFeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: stretch;
  gap: ${spaces[4]};
  margin-top: ${spaces[8]};

  & > * {
    flex-grow: 1;
    ${generateMediaQuery(
      "led",
      css`
        width: 23%;
      `
    )}
  }
`;
