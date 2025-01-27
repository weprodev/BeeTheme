import styled from "styled-components";
import Section from "../components/Section";
import { fontSizes, fontWeights, spaces } from "../../shared/styleVariables";
import GeneralParagraph from "../components/Paragraph";
import generateMediaQuery from "../../shared/generateMediaQuery";

export const StyledHomePages = styled(Section)`
  background-color: var(--color-tenth);
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding-block: ${spaces[20]};
  gap: ${spaces[4]};
`;

export const NumberOfPages = styled.span`
  background-color: var(--color-tenth);
  display: flex;
  flex-direction: column;
  font-size: ${fontSizes.xl7};
  font-weight: ${fontWeights.bold};
  color: transparent;
  background-image: var(--gradient-primary);
  -webkit-background-clip: text;
  background-clip: text;
  line-height: 1;
`;

export const Paragraph = styled(GeneralParagraph)`
  width: 55%;
  ${generateMediaQuery("laptop", "width:auto")}
`;

export const Pages = styled.div`
  display: flex;
  margin-top: ${spaces[10]};
  gap: ${spaces[6]};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;