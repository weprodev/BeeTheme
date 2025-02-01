import styled, { css } from "styled-components";
import Section from "../components/Section";
import { spaces } from "../../shared/styleVariables";
import generateMediaQuery from "../../shared/generateMediaQuery";

export const StyledHelpUsers = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: var(--color-twelfth);
  padding-block: ${spaces[20]};
`;
export const FeaturesContainer = styled.div`
  display: flex;
  gap: ${spaces[8]};
  margin-top: ${spaces[8]};
  justify-content: space-between;
  text-align: start;

  ${generateMediaQuery(
    "miniLaptop",
    css`
      flex-direction: column;
    `
  )}
`;
