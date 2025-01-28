import styled, { css } from "styled-components";
import Section from "../components/Section";
import {
  borderRadius,
  fontSizes,
  fontWeights,
  spaces,
} from "../../shared/styleVariables";
import generateMediaQuery from "../../shared/generateMediaQuery";

export const StyledPageBuilder = styled(Section)`
  display: flex;
  padding-block: ${spaces[20]};
  gap: ${spaces[10]};
  align-items: start;
  justify-content: space-between;
  background-color: var(--color-sixth);
  ${generateMediaQuery(
    "laptop",
    css`
      flex-direction: column;
    `
  )}
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spaces[6]};
`;
export const Elementor = styled.span`
  background-color: var(--color-white);
  color: var(--color-seventh);
  display: flex;
  align-items: center;
  font-weight: ${fontWeights.bold};
  font-size: ${fontSizes.xl3};
  line-height: 0.8;
  border-radius: ${borderRadius.full};
  gap: ${spaces[1]};
  padding: ${spaces[1]} ${spaces[2]};
  align-self: flex-start;
`;
export const ElementorIcon = styled.span`
  background-color: var(--color-seventh);
  color: var(--color-white);
  width: 2rem;
  height: 2rem;
  font-size: ${fontSizes.xs};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${borderRadius.full};
`;
export const FeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spaces[4]};
  justify-content: space-between;
`;
export const Feature = styled.span`
  display: flex;
  flex-grow: 1;
  align-items: center;
  border: 0.1rem solid var(--color-eleventh);
  gap: ${spaces[2]};
  padding: ${spaces[2]} ${spaces[4]};
  border-radius: ${borderRadius.full};
  ${generateMediaQuery(
    "led",
    css`
      width: 45%;
    `
  )}
`;
