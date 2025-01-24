import styled, { css } from "styled-components";

import { fontSizes, fontWeights } from "../../shared/styleVariables";

const variations = {
  primary: css`
    color: var(--color-white);
    font-weight: ${fontWeights.semiBold};
    line-height: 1.4;
  `,
};

const Heading = styled.h1<{ variation?: keyof typeof variations }>`
  ${(props) => variations[props.variation || "primary"]}

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: ${fontSizes.xl7};
    `}
`;

export default Heading;
