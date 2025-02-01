import styled from "styled-components";
import Section from "../components/Section";
import { spaces } from "../../shared/styleVariables";

export const StyledFooter = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spaces[2]};
  background-image: var(--gradient-primary);
  padding-block: ${spaces[20]};
  text-align: center;
`;
export const FeaturesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: ${spaces[8]};
`;
