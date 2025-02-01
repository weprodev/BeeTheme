import generateMediaQuery from "../../shared/generateMediaQuery";
import styled, { css } from "styled-components";
import Section from "../components/Section";
import { borderRadius, spaces } from "../../shared/styleVariables";

export const StyledTrusted = styled(Section)`
  display: flex;
  gap: ${spaces[20]};
  flex-wrap: wrap;
  background-color: var(--color-tenth);
  padding-block: ${spaces[10]};
  justify-content: center;
  align-items: center;

  ${generateMediaQuery(
    "laptop",
    css`
      text-align: center;
      gap: ${spaces[10]};
      padding-block: ${spaces[15]};
    `
  )}
`;
export const Card = styled.div`
  display: flex;
  gap: ${spaces[4]};
  background-color: var(--color-twelfth);
  padding: ${spaces[6]};
  border-radius: ${borderRadius.xl};
`;
export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spaces[2]};
`;

export const TrustedIcon = styled.div`
  width: 4rem;
`;
