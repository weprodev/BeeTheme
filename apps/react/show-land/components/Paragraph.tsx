import styled, { css } from "styled-components";

import { fontSizes, fontWeights } from "../../shared/styleVariables";

const variations = {
  primary: css`
    color: var(--color-white);
  `,
};

const Paragraph = styled.p<{ variation?: keyof typeof variations }>`
  font-weight: ${fontWeights.semiBold};
  font-size: ${fontSizes.lg};
  ${(props) => variations[props.variation || "primary"]}
`;

export default Paragraph;
