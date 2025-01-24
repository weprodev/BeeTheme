import styled, { css } from "styled-components";
import Section from "../components/Section";
import {
  borderRadius,
  fontSizes,
  fontWeights,
  spaces,
} from "../../shared/styleVariables";
import generateMediaQuery from "../../shared/generateMediaQuery";

export const StyledSuperFast = styled(Section)`
  background-color: var(--color-sixth);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: ${spaces[20]};
  gap: ${spaces[20]};

  ${generateMediaQuery(
    "miniLaptop",
    css`
      font-size: ${fontSizes.xl};
      flex-direction: column;
      gap: ${spaces[20]};
      padding-block: ${spaces[12]};
      text-align: center;
    `
  )}
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: ${spaces[4]};
  ${generateMediaQuery(
    "miniLaptop",
    css`
      align-items: center;
    `
  )}
`;
export const InfoSmallText = styled.span`
  font-size: ${fontSizes.xl};
  display: flex;
  white-space: nowrap;
  align-items: center;
  gap: ${spaces[2]};
`;

export const Performance = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const PerformanceFeatures = styled.div`
  display: flex;
  margin-bottom: ${spaces[10]};
  gap: ${spaces[6]};
  ${generateMediaQuery(
    "mobile",
    css`
      flex-direction: column;
    `
  )}
`;
export const PerformanceFeature = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spaces[1]};
  align-items: center;
  color: transparent;
  background-image: var(--gradient-secondary);
  -webkit-background-clip: text;
  background-clip: text;
  font-weight: ${fontWeights.bold};
`;
export const PerformanceCircle: React.FC<{
  textType: "letter" | "number";
  children?: string;
}> = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: ${borderRadius.full};
  border: 0.1rem solid var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) =>
    props.textType === "number" ? fontSizes.xl6 : fontSizes.xl9};

  ${generateMediaQuery(
    "laptop",
    css`
      font-size: ${fontSizes.xl5};
    `
  )}
`;

export const PerformanceReporters = styled.div`
  display: flex;
  align-items: center;
  gap: ${spaces[8]};
  ${generateMediaQuery(
    "mobile",
    css`
      flex-direction: column;
      gap: ${spaces[4]};
    `
  )}
`;
export const PerformanceReporter = styled.img`
  height: 6rem;
  width: 10rem;
  object-fit: cover;
`;
