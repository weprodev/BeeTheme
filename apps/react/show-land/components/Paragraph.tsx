import styled, { css } from "styled-components";

import { fontSizes, fontWeights } from "../../shared/styleVariables";

const variations = {
  primary: css`
    color: var(--color-white);
  `,
  secondary: css`
    color: var(--color-fifteenth);
  `,
};

const Paragraph = styled.p<{
  variation?: keyof typeof variations;
  fontSize?: string;
}>`
  font-weight: ${fontWeights.medium};
  font-size: ${(props) => props.fontSize || fontSizes.lg};
  ${(props) => variations[props.variation || "primary"]}
`;

export default Paragraph;
